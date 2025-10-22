/**
 * Component data types and utilities for extracting Gestalt component information
 */

export interface GestaltComponent {
  id: string;
  name: string;
  description: string;
  category: string[];
  platform: 'web' | 'ios' | 'android' | 'figma';
  status: {
    status: 'ready' | 'partial' | 'planned' | 'notAvailable' | 'deprecated';
    documentation?: string;
    figmaStatus?: string;
    responsive?: string;
    mobileAdaptive?: string;
    accessible?: {
      summary?: string;
      a11yVisual?: string;
      a11yScreenreader?: string;
      a11yNavigation?: string;
      a11yComprehension?: string;
    };
  };
  alias?: string[];
  path?: string;
}

/**
 * Gestalt component library data
 * This is a curated, static dataset of Gestalt components for MCP server
 *
 * Data sourced from: /docs/docs-components/data/components.tsx
 */
export const gestaltComponents: GestaltComponent[] = [
  {
    id: 'Accordion',
    name: 'Accordion',
    description: 'Accordion is a container that can be expanded and collapsed to show or hide content.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/accordion'
  },
  {
    id: 'ActivationCard',
    name: 'ActivationCard',
    description: 'ActivationCards are used in groups to communicate a user\'s stage in a series of steps toward an overall action.',
    category: ['Messaging'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/activationcard'
  },
  {
    id: 'Avatar',
    name: 'Avatar',
    description: 'Avatar is used to represent a user or organization.',
    category: ['Avatars'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Profile picture'],
    path: '/web/avatar'
  },
  {
    id: 'AvatarGroup',
    name: 'AvatarGroup',
    description: 'AvatarGroup is used to display a group of user avatars.',
    category: ['Avatars'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/avatargroup'
  },
  {
    id: 'Badge',
    name: 'Badge',
    description: 'Badge is a label that indicates status or importance.',
    category: ['Messaging'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/badge'
  },
  {
    id: 'BannerCallout',
    name: 'BannerCallout',
    description: 'BannerCallout is used to highlight important information and attract user attention.',
    category: ['Messaging'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/bannercallout'
  },
  {
    id: 'BannerOverlay',
    name: 'BannerOverlay',
    description: 'BannerOverlay is a full-screen overlay used to communicate critical information.',
    category: ['Messaging'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/banneroverlay'
  },
  {
    id: 'BannerSlim',
    name: 'BannerSlim',
    description: 'BannerSlim conveys brief information related to a specific section of a page.',
    category: ['Messaging'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/bannerslim'
  },
  {
    id: 'BannerUpsell',
    name: 'BannerUpsell',
    description: 'BannerUpsell is a banner that encourages users to upgrade or try new features.',
    category: ['Messaging'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/bannerupsell'
  },
  {
    id: 'Box',
    name: 'Box',
    description: 'Box is a fundamental layout component that provides common CSS properties.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Container', 'Div'],
    path: '/web/box'
  },
  {
    id: 'Button',
    name: 'Button',
    description: 'Button allows users to perform actions within a product.',
    category: ['Actions'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['CTA', 'Call to action'],
    path: '/web/button'
  },
  {
    id: 'ButtonGroup',
    name: 'ButtonGroup',
    description: 'ButtonGroup is used to display a set of related buttons.',
    category: ['Actions'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/buttongroup'
  },
  {
    id: 'ButtonLink',
    name: 'ButtonLink',
    description: 'ButtonLink is a button styled as a link for navigational actions.',
    category: ['Actions'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/buttonlink'
  },
  {
    id: 'ButtonToggle',
    name: 'ButtonToggle',
    description: 'ButtonToggle is a button that can be toggled on and off.',
    category: ['Controls'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/buttontoggle'
  },
  {
    id: 'Card',
    name: 'Card',
    description: 'Card is a container component for grouping related content.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/card'
  },
  {
    id: 'ChartGraph',
    name: 'ChartGraph',
    description: 'ChartGraph is used for data visualization with charts and graphs.',
    category: ['Data'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/chartgraph'
  },
  {
    id: 'Checkbox',
    name: 'Checkbox',
    description: 'Checkbox allows users to select multiple items from a list.',
    category: ['Controls'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/checkbox'
  },
  {
    id: 'Collage',
    name: 'Collage',
    description: 'Collage displays a collage of images in a structured layout.',
    category: ['Layouts'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/collage'
  },
  {
    id: 'Column',
    name: 'Column',
    description: 'Column creates a flexible column layout within a grid system.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/column'
  },
  {
    id: 'ComboBox',
    name: 'ComboBox',
    description: 'ComboBox combines a text input with a dropdown for selection and search.',
    category: ['Fields and forms'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Autocomplete', 'Typeahead'],
    path: '/web/combobox'
  },
  {
    id: 'Container',
    name: 'Container',
    description: 'Container provides consistent horizontal padding and max-width constraints.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/container'
  },
  {
    id: 'Datapoint',
    name: 'Datapoint',
    description: 'Datapoint displays a single data metric with optional trend indicator.',
    category: ['Data'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/datapoint'
  },
  {
    id: 'DateField',
    name: 'DateField',
    description: 'DateField allows users to input dates via text field.',
    category: ['Fields and forms'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/datefield'
  },
  {
    id: 'DatePicker',
    name: 'DatePicker',
    description: 'DatePicker allows users to select a date from a calendar interface.',
    category: ['Fields and forms'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/datepicker'
  },
  {
    id: 'DateRange',
    name: 'DateRange',
    description: 'DateRange allows users to select a range of dates.',
    category: ['Fields and forms'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/daterange'
  },
  {
    id: 'Divider',
    name: 'Divider',
    description: 'Divider is a visual separator between content sections.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Separator', 'HR'],
    path: '/web/divider'
  },
  {
    id: 'Dropdown',
    name: 'Dropdown',
    description: 'Dropdown displays a list of actions or options in a menu.',
    category: ['Controls'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Menu'],
    path: '/web/dropdown'
  },
  {
    id: 'Flex',
    name: 'Flex',
    description: 'Flex is a layout component that implements CSS flexbox.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/flex'
  },
  {
    id: 'Heading',
    name: 'Heading',
    description: 'Heading defines section headings with semantic HTML heading tags.',
    category: ['Text'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Title', 'H1', 'H2', 'H3'],
    path: '/web/heading'
  },
  {
    id: 'HelpButton',
    name: 'HelpButton',
    description: 'HelpButton provides contextual help information.',
    category: ['Actions'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/helpbutton'
  },
  {
    id: 'Icon',
    name: 'Icon',
    description: 'Icon displays SVG icons from Gestalt\'s icon library.',
    category: ['Indicators'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/icon'
  },
  {
    id: 'IconButton',
    name: 'IconButton',
    description: 'IconButton is a button with only an icon, no text label.',
    category: ['Actions'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/iconbutton'
  },
  {
    id: 'IconButtonFloating',
    name: 'IconButtonFloating',
    description: 'IconButtonFloating is a floating action button with an icon.',
    category: ['Actions'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['FAB'],
    path: '/web/iconbuttonfloating'
  },
  {
    id: 'IconButtonLink',
    name: 'IconButtonLink',
    description: 'IconButtonLink is an icon button that navigates to a URL.',
    category: ['Actions'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/iconbuttonlink'
  },
  {
    id: 'Image',
    name: 'Image',
    description: 'Image displays images with built-in optimization and lazy loading.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Img', 'Picture'],
    path: '/web/image'
  },
  {
    id: 'Label',
    name: 'Label',
    description: 'Label provides a label for form fields.',
    category: ['Fields and forms'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/label'
  },
  {
    id: 'Layer',
    name: 'Layer',
    description: 'Layer renders content in a portal outside the DOM hierarchy.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Portal'],
    path: '/web/layer'
  },
  {
    id: 'Letterbox',
    name: 'Letterbox',
    description: 'Letterbox creates a fixed aspect ratio container for content.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/letterbox'
  },
  {
    id: 'Link',
    name: 'Link',
    description: 'Link is used for navigation between pages or sections.',
    category: ['Actions'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Anchor', 'Hyperlink'],
    path: '/web/link'
  },
  {
    id: 'List',
    name: 'List',
    description: 'List displays a vertical list of items.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['UL', 'OL'],
    path: '/web/list'
  },
  {
    id: 'Mask',
    name: 'Mask',
    description: 'Mask creates shaped containers for images and content.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/mask'
  },
  {
    id: 'Masonry',
    name: 'Masonry',
    description: 'Masonry creates a Pinterest-style grid layout.',
    category: ['Layouts'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Grid'],
    path: '/web/masonry'
  },
  {
    id: 'Modal',
    name: 'Modal',
    description: 'Modal displays content in a layer above the main page.',
    category: ['Overlays'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Dialog', 'Popup'],
    path: '/web/modal'
  },
  {
    id: 'ModalAlert',
    name: 'ModalAlert',
    description: 'ModalAlert displays important warnings and confirmations.',
    category: ['Overlays'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Alert dialog', 'Confirm dialog'],
    path: '/web/modalalert'
  },
  {
    id: 'NumberField',
    name: 'NumberField',
    description: 'NumberField allows users to input numeric values.',
    category: ['Fields and forms'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/numberfield'
  },
  {
    id: 'OverlayPanel',
    name: 'OverlayPanel',
    description: 'OverlayPanel displays content in a panel that slides in from the side.',
    category: ['Overlays'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Drawer', 'Side panel'],
    path: '/web/overlaypanel'
  },
  {
    id: 'PageHeader',
    name: 'PageHeader',
    description: 'PageHeader displays the title and actions for a page.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/pageheader'
  },
  {
    id: 'Pog',
    name: 'Pog',
    description: 'Pog is a circular icon container.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/pog'
  },
  {
    id: 'Popover',
    name: 'Popover',
    description: 'Popover displays floating content anchored to an element.',
    category: ['Overlays'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Tooltip menu'],
    path: '/web/popover'
  },
  {
    id: 'Pulsar',
    name: 'Pulsar',
    description: 'Pulsar creates an animated pulsing effect to draw attention.',
    category: ['Indicators'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/pulsar'
  },
  {
    id: 'RadioGroup',
    name: 'RadioGroup',
    description: 'RadioGroup allows users to select a single option from a list.',
    category: ['Controls'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Radio button'],
    path: '/web/radiogroup'
  },
  {
    id: 'ScrollBoundaryContainer',
    name: 'ScrollBoundaryContainer',
    description: 'ScrollBoundaryContainer provides a scroll context boundary.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/scrollboundarycontainer'
  },
  {
    id: 'SearchField',
    name: 'SearchField',
    description: 'SearchField is a text input for search queries.',
    category: ['Fields and forms'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Search box', 'Search input'],
    path: '/web/searchfield'
  },
  {
    id: 'SearchGuide',
    name: 'SearchGuide',
    description: 'SearchGuide displays search suggestions and guides.',
    category: ['Controls'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/searchguide'
  },
  {
    id: 'SegmentedControl',
    name: 'SegmentedControl',
    description: 'SegmentedControl displays a set of 2-5 options for users to choose from.',
    category: ['Controls'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Toggle group'],
    path: '/web/segmentedcontrol'
  },
  {
    id: 'SelectList',
    name: 'SelectList',
    description: 'SelectList is a dropdown menu for selecting from a list of options.',
    category: ['Fields and forms'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Select', 'Dropdown'],
    path: '/web/selectlist'
  },
  {
    id: 'SheetMobile',
    name: 'SheetMobile',
    description: 'SheetMobile displays content in a bottom sheet on mobile.',
    category: ['Overlays'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Bottom sheet'],
    path: '/web/sheetmobile'
  },
  {
    id: 'SideNavigation',
    name: 'SideNavigation',
    description: 'SideNavigation provides primary navigation in a sidebar.',
    category: ['Navigation'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Sidebar', 'Nav'],
    path: '/web/sidenavigation'
  },
  {
    id: 'Spinner',
    name: 'Spinner',
    description: 'Spinner indicates loading state.',
    category: ['Indicators'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Loading', 'Loader'],
    path: '/web/spinner'
  },
  {
    id: 'Status',
    name: 'Status',
    description: 'Status communicates the state of an item or process.',
    category: ['Indicators'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/status'
  },
  {
    id: 'Sticky',
    name: 'Sticky',
    description: 'Sticky creates content that sticks to the viewport on scroll.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/sticky'
  },
  {
    id: 'Switch',
    name: 'Switch',
    description: 'Switch is a control for toggling between two states.',
    category: ['Controls'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Toggle'],
    path: '/web/switch'
  },
  {
    id: 'Table',
    name: 'Table',
    description: 'Table displays data in rows and columns.',
    category: ['Data'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/table'
  },
  {
    id: 'TableOfContents',
    name: 'TableOfContents',
    description: 'TableOfContents provides navigation within a page.',
    category: ['Navigation'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['TOC'],
    path: '/web/tableofcontents'
  },
  {
    id: 'Tabs',
    name: 'Tabs',
    description: 'Tabs organize content into different views.',
    category: ['Navigation'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/tabs'
  },
  {
    id: 'Tag',
    name: 'Tag',
    description: 'Tag represents categorization or filters.',
    category: ['Controls'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Chip', 'Pill'],
    path: '/web/tag'
  },
  {
    id: 'TagData',
    name: 'TagData',
    description: 'TagData displays data tags with optional removal.',
    category: ['Data'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/tagdata'
  },
  {
    id: 'TapArea',
    name: 'TapArea',
    description: 'TapArea provides a clickable/tappable area.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/taparea'
  },
  {
    id: 'Text',
    name: 'Text',
    description: 'Text displays text with consistent styling.',
    category: ['Text'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Paragraph', 'P'],
    path: '/web/text'
  },
  {
    id: 'TextArea',
    name: 'TextArea',
    description: 'TextArea allows users to input multi-line text.',
    category: ['Fields and forms'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/textarea'
  },
  {
    id: 'TextField',
    name: 'TextField',
    description: 'TextField allows users to input single-line text.',
    category: ['Fields and forms'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Input', 'Text input'],
    path: '/web/textfield'
  },
  {
    id: 'TileData',
    name: 'TileData',
    description: 'TileData displays data in a tile format.',
    category: ['Data'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/tiledata'
  },
  {
    id: 'Toast',
    name: 'Toast',
    description: 'Toast displays brief, temporary notifications.',
    category: ['Messaging'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Snackbar', 'Notification'],
    path: '/web/toast'
  },
  {
    id: 'Tooltip',
    name: 'Tooltip',
    description: 'Tooltip displays additional information on hover.',
    category: ['Overlays'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/tooltip'
  },
  {
    id: 'Video',
    name: 'Video',
    description: 'Video displays video content with controls.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/video'
  },
  {
    id: 'WashAnimated',
    name: 'WashAnimated',
    description: 'WashAnimated creates an animated loading skeleton.',
    category: ['Indicators'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    alias: ['Skeleton'],
    path: '/web/washanimated'
  },
  {
    id: 'ZIndexClasses',
    name: 'ZIndexClasses',
    description: 'ZIndexClasses provides z-index utility classes.',
    category: ['Building blocks'],
    platform: 'web',
    status: { status: 'ready', documentation: 'ready' },
    path: '/web/zindex_classes'
  }
];

/**
 * Get all components
 */
export function getAllComponents(): GestaltComponent[] {
  return gestaltComponents;
}

/**
 * Get a component by ID
 */
export function getComponentById(id: string): GestaltComponent | undefined {
  return gestaltComponents.find(
    (comp) => comp.id.toLowerCase() === id.toLowerCase()
  );
}

/**
 * Search components by name, description, category, or alias
 */
export function searchComponents(query: string): GestaltComponent[] {
  const lowerQuery = query.toLowerCase();

  return gestaltComponents.filter((comp) => {
    // Search in name
    if (comp.name.toLowerCase().includes(lowerQuery)) return true;

    // Search in description
    if (comp.description.toLowerCase().includes(lowerQuery)) return true;

    // Search in category
    if (comp.category.some((cat) => cat.toLowerCase().includes(lowerQuery))) return true;

    // Search in alias
    if (comp.alias?.some((alias) => alias.toLowerCase().includes(lowerQuery))) return true;

    return false;
  });
}

/**
 * Get components by category
 */
export function getComponentsByCategory(category: string): GestaltComponent[] {
  return gestaltComponents.filter((comp) =>
    comp.category.some((cat) => cat.toLowerCase() === category.toLowerCase())
  );
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const categories = new Set<string>();
  gestaltComponents.forEach((comp) => {
    comp.category.forEach((cat) => categories.add(cat));
  });
  return Array.from(categories).sort();
}
