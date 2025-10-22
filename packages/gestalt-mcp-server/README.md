# Gestalt MCP Server

A Model Context Protocol (MCP) server for Pinterest's Gestalt design system component library. This server enables AI assistants and other MCP clients to access comprehensive information about Gestalt components, search the component library, and retrieve documentation URLs.

## Overview

The Gestalt MCP Server provides:

- **Resources**: Access to all Gestalt components, categories, and detailed component information
- **Tools**: Search functionality, component lookup, and category-based filtering
- **Documentation Links**: Direct URLs to official Gestalt component documentation

## What is MCP?

Model Context Protocol (MCP) is an open protocol developed by Anthropic that enables seamless integration between LLM applications and external data sources and tools. MCP servers expose resources and tools that AI assistants can use to access up-to-date information and perform actions.

## Features

### Resources

The server exposes the following resources:

- `gestalt://components/all` - Complete list of all Gestalt components
- `gestalt://categories/all` - List of all component categories
- `gestalt://component/{id}` - Detailed information for a specific component
- `gestalt://category/{category}` - All components in a specific category

### Tools

The server provides these tools:

1. **search_components** - Search for components by name, description, category, or alias
2. **get_component** - Get detailed information about a specific component
3. **list_components_by_category** - Get all components in a category
4. **list_all_categories** - Get a list of all available categories
5. **get_component_documentation_url** - Get the official documentation URL for a component

## Installation

From the Gestalt repository root:

```bash
cd packages/gestalt-mcp-server
yarn install
yarn build
```

## Usage

### With Claude Desktop

Add the server to your Claude Desktop configuration file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "gestalt": {
      "command": "node",
      "args": [
        "/absolute/path/to/gestalt/packages/gestalt-mcp-server/dist/index.js"
      ]
    }
  }
}
```

After adding the configuration, restart Claude Desktop.

### With Other MCP Clients

The server uses stdio transport and can be used with any MCP-compatible client:

```bash
node dist/index.js
```

## Component Data

The server includes comprehensive data for 70+ Gestalt components across categories:

- **Actions**: Button, Link, IconButton, ButtonGroup, etc.
- **Avatars**: Avatar, AvatarGroup
- **Building blocks**: Box, Flex, Container, Layer, etc.
- **Controls**: Checkbox, RadioGroup, Switch, Dropdown, etc.
- **Data**: Table, ChartGraph, Datapoint, TileData, etc.
- **Fields and forms**: TextField, TextArea, ComboBox, DatePicker, etc.
- **Indicators**: Spinner, Status, Icon, Pulsar, etc.
- **Layouts**: Masonry, Collage
- **Messaging**: Toast, Badge, BannerCallout, BannerSlim, etc.
- **Navigation**: Tabs, SideNavigation, TableOfContents
- **Overlays**: Modal, Popover, Tooltip, OverlayPanel, etc.
- **Text**: Text, Heading

Each component includes:

- Component name and ID
- Description
- Category/categories
- Platform (web, iOS, Android, Figma)
- Status information
- Aliases (alternative names)
- Documentation path

## Example Usage

Once connected to an MCP client like Claude Desktop, you can ask questions like:

- "What Gestalt components are available for displaying data?"
- "Show me information about the Button component"
- "Search for form field components in Gestalt"
- "What's the documentation URL for the Modal component?"

## Development

### Building

```bash
yarn build
```

### Watch Mode

```bash
yarn watch
```

### Testing Locally

You can test the server by running it directly:

```bash
yarn build
yarn start
```

The server will start and wait for MCP protocol messages on stdin.

## Project Structure

```
gestalt-mcp-server/
├── src/
│   ├── index.ts           # Main MCP server implementation
│   └── component-data.ts  # Component data and utility functions
├── dist/                  # Compiled JavaScript output
├── package.json
├── tsconfig.json
└── README.md
```

## Technical Details

- **Protocol**: Model Context Protocol (MCP)
- **Transport**: stdio
- **Runtime**: Node.js
- **Language**: TypeScript
- **SDK**: @modelcontextprotocol/sdk

## Resources

- [Gestalt Design System](https://gestalt.pinterest.systems/)
- [Gestalt GitHub Repository](https://github.com/pinterest/gestalt)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)

## License

Apache-2.0

## Contributing

This MCP server is part of the Gestalt design system project. Contributions are welcome!

When updating component data, ensure that:

1. Component information matches the official Gestalt documentation
2. All required fields are present (id, name, description, category, platform, status)
3. Documentation paths are correct
4. The data remains in sync with the main Gestalt component library

## Support

For issues or questions:

- File an issue in the [Gestalt GitHub repository](https://github.com/pinterest/gestalt/issues)
- Consult the [Gestalt documentation](https://gestalt.pinterest.systems/)
- Review [MCP documentation](https://modelcontextprotocol.io/)
