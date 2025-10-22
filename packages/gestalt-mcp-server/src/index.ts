#!/usr/bin/env node

/**
 * Gestalt MCP Server
 *
 * Model Context Protocol server for Pinterest's Gestalt design system.
 * Provides access to component information, documentation, and search capabilities.
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import {
  getAllComponents,
  getAllCategories,
  getComponentById,
  getComponentsByCategory,
  searchComponents,
  type GestaltComponent,
} from './component-data.js';

/**
 * MCP Server for Gestalt Design System
 */
class GestaltMCPServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: 'gestalt-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          resources: {},
          tools: {},
        },
      }
    );

    this.setupHandlers();
  }

  /**
   * Set up request handlers for the MCP server
   */
  private setupHandlers(): void {
    // List available resources
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      const components = getAllComponents();
      const categories = getAllCategories();

      return {
        resources: [
          {
            uri: 'gestalt://components/all',
            name: 'All Gestalt Components',
            description: 'Complete list of all Gestalt design system components',
            mimeType: 'application/json',
          },
          {
            uri: 'gestalt://categories/all',
            name: 'Component Categories',
            description: 'List of all component categories in Gestalt',
            mimeType: 'application/json',
          },
          ...components.map((comp) => ({
            uri: `gestalt://component/${comp.id}`,
            name: comp.name,
            description: comp.description,
            mimeType: 'application/json',
          })),
          ...categories.map((category) => ({
            uri: `gestalt://category/${encodeURIComponent(category)}`,
            name: `${category} Components`,
            description: `All components in the ${category} category`,
            mimeType: 'application/json',
          })),
        ],
      };
    });

    // Read resource content
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const uri = request.params.uri;

      if (uri === 'gestalt://components/all') {
        const components = getAllComponents();
        return {
          contents: [
            {
              uri,
              mimeType: 'application/json',
              text: JSON.stringify(components, null, 2),
            },
          ],
        };
      }

      if (uri === 'gestalt://categories/all') {
        const categories = getAllCategories();
        return {
          contents: [
            {
              uri,
              mimeType: 'application/json',
              text: JSON.stringify(categories, null, 2),
            },
          ],
        };
      }

      if (uri.startsWith('gestalt://component/')) {
        const componentId = uri.replace('gestalt://component/', '');
        const component = getComponentById(componentId);

        if (!component) {
          throw new Error(`Component not found: ${componentId}`);
        }

        return {
          contents: [
            {
              uri,
              mimeType: 'application/json',
              text: JSON.stringify(component, null, 2),
            },
          ],
        };
      }

      if (uri.startsWith('gestalt://category/')) {
        const category = decodeURIComponent(uri.replace('gestalt://category/', ''));
        const components = getComponentsByCategory(category);

        return {
          contents: [
            {
              uri,
              mimeType: 'application/json',
              text: JSON.stringify(components, null, 2),
            },
          ],
        };
      }

      throw new Error(`Unknown resource URI: ${uri}`);
    });

    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'search_components',
            description:
              'Search Gestalt components by name, description, category, or alias. ' +
              'Returns matching components with their full details.',
            inputSchema: {
              type: 'object',
              properties: {
                query: {
                  type: 'string',
                  description: 'Search query to find components',
                },
              },
              required: ['query'],
            },
          },
          {
            name: 'get_component',
            description:
              'Get detailed information about a specific Gestalt component by its ID or name.',
            inputSchema: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'Component ID or name (e.g., "Button", "TextField")',
                },
              },
              required: ['id'],
            },
          },
          {
            name: 'list_components_by_category',
            description:
              'Get all components in a specific category. ' +
              'Categories include: Actions, Avatars, Building blocks, Controls, Data, ' +
              'Fields and forms, Indicators, Layouts, Messaging, Navigation, Overlays, Text.',
            inputSchema: {
              type: 'object',
              properties: {
                category: {
                  type: 'string',
                  description: 'Category name',
                },
              },
              required: ['category'],
            },
          },
          {
            name: 'list_all_categories',
            description: 'Get a list of all component categories in the Gestalt design system.',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
          {
            name: 'get_component_documentation_url',
            description:
              'Get the documentation URL for a specific component on the Gestalt website.',
            inputSchema: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'Component ID or name',
                },
              },
              required: ['id'],
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      switch (name) {
        case 'search_components': {
          const query = args?.query as string;
          if (!query) {
            throw new Error('Query parameter is required');
          }

          const results = searchComponents(query);
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify(results, null, 2),
              },
            ],
          };
        }

        case 'get_component': {
          const id = args?.id as string;
          if (!id) {
            throw new Error('Component ID is required');
          }

          const component = getComponentById(id);
          if (!component) {
            throw new Error(`Component not found: ${id}`);
          }

          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify(component, null, 2),
              },
            ],
          };
        }

        case 'list_components_by_category': {
          const category = args?.category as string;
          if (!category) {
            throw new Error('Category parameter is required');
          }

          const components = getComponentsByCategory(category);
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify(components, null, 2),
              },
            ],
          };
        }

        case 'list_all_categories': {
          const categories = getAllCategories();
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify(categories, null, 2),
              },
            ],
          };
        }

        case 'get_component_documentation_url': {
          const id = args?.id as string;
          if (!id) {
            throw new Error('Component ID is required');
          }

          const component = getComponentById(id);
          if (!component) {
            throw new Error(`Component not found: ${id}`);
          }

          const baseUrl = 'https://gestalt.pinterest.systems';
          const url = `${baseUrl}${component.path}`;

          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify(
                  {
                    component: component.name,
                    url,
                    description: component.description,
                  },
                  null,
                  2
                ),
              },
            ],
          };
        }

        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    });
  }

  /**
   * Start the MCP server
   */
  async start(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);

    // Log to stderr since stdout is used for MCP communication
    console.error('Gestalt MCP Server running on stdio');
  }
}

// Start the server
const server = new GestaltMCPServer();
server.start().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
