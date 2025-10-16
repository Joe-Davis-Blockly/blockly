import {referenceSidebar} from './docs/blockly/reference/_reference'

// @ts-nocheck

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
- render a sidebar for each doc of that group
- provide next/previous navigation

The sidebars can be generated from the filesystem, or explicitly defined here.

Create as many sidebars as you want.

@type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
*/
const sidebars = {
  tutorialSidebar: [
    {
      "type": "doc",
      "label": "Codelabs",
      "id": "blockly/codelabs/index",
    },
    {
      type: 'category',
      label: 'Getting started with Blockly',
      items: [
        {
          "type": "doc",
          "label": "1. Codelab-overview",
          "id": "blockly/codelabs/getting-started/getting_started"
        },
        {
          "type": "doc",
          "label": "2. Setup",
          "id": "blockly/codelabs/getting-started/setup"
        },
        {
          "type": "doc",
          "label": "3. Explore the app",
          "id": "blockly/codelabs/getting-started/explore-the-app"
        },
        {
          "type": "doc",
          "label": "4. Add Blockly libraries",
          "id": "blockly/codelabs/getting-started/add-blockly-libraries"
        },
      ]
    },
    {
      type: 'category',
      label: 'Build a custom generator',
      items: [
        {
          "type": "doc",
          "label": "1. Codelab-overview",
          "id": "blockly/codelabs/custom-generator/custom_generator",
        },
      ]
    },
  ],
  guidesSidebar: [
    {
      type: "category",
      label: "Get started",
      items: [
        {
          type: "doc",
          label: "What Is Blockly",
          id: "blockly/guides/get-started/what-is-blockly",
        },
        {
          type: "doc",
          label: "Why Blockly",
          id: "blockly/guides/get-started/why-blockly",
        },
        {
          type: "doc",
          label: "Get The Code",
          id: "blockly/guides/get-started/get-the-code",
        },
        {
          type: "doc",
          label: "Workspace Anatomy",
          id: "blockly/guides/get-started/workspace-anatomy",
        },
        {
          type: "category",
          label: "Basic steps",
          items: [
            {
              type: "doc",
              label: "Create a workspace",
              id: "blockly/guides/get-started/workspace-creation",
            },
            {
              type: "doc",
              label: "Add a toolbox",
              id: "blockly/guides/get-started/toolbox",
            },
            {
              type: "doc",
              label: "Define custom blocks",
              id: "blockly/guides/get-started/blocks",
            },
            {
              type: "doc",
              label: "Generate code",
              id: "blockly/guides/get-started/code-generation",
            },
            {
              type: "doc",
              label: "Save and load",
              id: "blockly/guides/get-started/save-and-load",
            },
          ],
        },
        {
          type: "category",
          label: "Try Blockly",
          items: [
            {
              type: "link",
              label: "Get started codelab",
              href: "https://blocklycodelabs.dev/blockly/codelabs/getting-started/index.html?index=..%2F..index#0",
            },
            {
              type: "link",
              label: "Blockly Playground",
              href: "https://blockly-demo.appspot.com/static/tests/playground.html",
            },
            {
              type: "link",
              label: "Block Factory",
              href: "https://google.github.io/blockly-samples/examples/developer-tools/index.html",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Design considerations",
      items: [
        {
          type: "doc",
          label: "Introduction to Blockly applications",
          id: "blockly/guides/design/app-overview",
        },
        {
          type: "doc",
          label: "Application design",
          id: "blockly/guides/design/applications",
        },
        {
          type: "doc",
          label: "Educational applications",
          id: "blockly/guides/design/education",
        },
        {
          type: "doc",
          label: "Block design",
          id: "blockly/guides/design/blocks",
        },
        {
          type: "doc",
          label: "Block- vs text-based languages",
          id: "blockly/guides/design/languages",
        },
        {
          type: "doc",
          label: "Block appearance",
          id: "blockly/guides/design/appearance",
        },
      ],
    },
    {
      type: "category",
      label: "Programming considerations",
      items: [
        {
          type: "doc",
          label: "API visibility",
          id: "blockly/guides/programming/using_blockly_apis",
        },
        {
          type: "doc",
          label: "Plugins",
          id: "blockly/guides/programming/plugin_overview",
        },
        {
          type: "doc",
          label: "Fork Blockly",
          id: "blockly/guides/programming/forking_blockly",
        },
        {
          type: "doc",
          label: "Unfork Blockly",
          id: "blockly/guides/programming/unforking_blockly",
        },
      ],
    },
    {
      type: "category",
      label: "Build your editor",
      items: [
        {
          type: "category",
          label: "Workspaces",
          items: [
            {
              type: "category",
              label: "Create a workspace",
              items: [
                {
                  type: "doc",
                  label: "Create a workspace",
                  id: "blockly/guides/configure/web/configuration_struct",
                },
                {
                  type: "doc",
                  label: "Grid option",
                  id: "blockly/guides/configure/web/grid",
                },
                {
                  type: "doc",
                  label: "Media folder option",
                  id: "blockly/guides/configure/web/media",
                },
                {
                  type: "doc",
                  label: "Move option",
                  id: "blockly/guides/configure/web/move",
                },
                {
                  type: "doc",
                  label: "Zoom option",
                  id: "blockly/guides/configure/web/zoom",
                },
              ],
            },
            {
              type: "category",
              label: "Workspace size",
              items: [
                {
                  type: "doc",
                  label: "Fixed-size workspace",
                  id: "blockly/guides/configure/web/fixed-size",
                },
                {
                  type: "doc",
                  label: "Resizable workspace",
                  id: "blockly/guides/configure/web/resizable",
                },
                {
                  type: "doc",
                  label: "Metrics Manager",
                  id: "blockly/guides/configure/web/metrics_manager",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Toolboxes",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "blockly/guides/configure/web/toolboxes/toolbox",
            },
            {
              type: "category",
              label: "Flyout toolboxes",
              items: [
                {
                  type: "doc",
                  label: "Define a flyout toolbox",
                  id: "blockly/guides/configure/web/toolboxes/flyout",
                },
              ],
            },
            {
              type: "category",
              label: "Category toolboxes",
              items: [
                {
                  type: "doc",
                  label: "Define a category toolbox",
                  id: "blockly/guides/configure/web/toolboxes/category",
                },
                {
                  type: "doc",
                  label: "Nested categories",
                  id: "blockly/guides/configure/web/toolboxes/nested",
                },
                {
                  type: "doc",
                  label: "Dynamic categories",
                  id: "blockly/guides/configure/web/toolboxes/dynamic",
                },
                {
                  type: "doc",
                  label: "Disable, hide, or expand categories",
                  id: "blockly/guides/configure/web/toolboxes/disable-categories",
                },
                {
                  type: "doc",
                  label: "Category appearance",
                  id: "blockly/guides/configure/web/toolboxes/appearance",
                },
                {
                  type: "doc",
                  label: "Programmatic access",
                  id: "blockly/guides/configure/web/toolboxes/programmatic",
                },
              ],
            },
            {
              type: "doc",
              label: "Preset blocks",
              id: "blockly/guides/configure/web/toolboxes/preset",
            },
            {
              type: "doc",
              label: "Separators",
              id: "blockly/guides/configure/web/toolboxes/separators",
            },
            {
              type: "doc",
              label: "Buttons and labels",
              id: "blockly/guides/configure/web/toolboxes/buttons",
            },
            {
              type: "doc",
              label: "Programmatic access",
              id: "blockly/guides/configure/web/toolboxes/modify",
            },
          ],
        },
        {
          type: "category",
          label: "Appearance",
          items: [
            {
              type: "doc",
              label: "Style with CSS",
              id: "blockly/guides/configure/web/appearance/css",
            },
            {
              type: "doc",
              label: "Colour formats",
              id: "blockly/guides/configure/web/appearance/colour-formats",
            },
            {
              type: "doc",
              label: "Block colours",
              id: "blockly/guides/configure/web/appearance/block-colour",
            },
            {
              type: "doc",
              label: "Themes",
              id: "blockly/guides/configure/web/appearance/themes",
            },
          ],
        },
        {
          type: "doc",
          label: "Save and load",
          id: "blockly/guides/configure/web/serialization",
        },
        {
          type: "doc",
          label: "Events",
          id: "blockly/guides/configure/web/events",
        },
        {
          type: "category",
          label: "Shortcuts and context menus",
          items: [
            {
              type: "doc",
              label: "Keyboard shortcuts",
              id: "blockly/guides/configure/web/keyboard-shortcuts",
            },
            {
              type: "doc",
              label: "Copy and paste",
              id: "blockly/guides/configure/web/copy-paste",
            },
            {
              type: "doc",
              label: "Context menus",
              id: "blockly/guides/configure/web/context-menus",
            },
          ],
        },
        {
          type: "category",
          label: "Drag and drop",
          items: [
            {
              type: "doc",
              label: "Custom draggables",
              id: "blockly/guides/configure/web/dragging/draggable",
            },
            {
              type: "doc",
              label: "Custom block drag strategies",
              id: "blockly/guides/configure/web/dragging/block-drag-strategies",
            },
            {
              type: "doc",
              label: "Custom draggers",
              id: "blockly/guides/configure/web/dragging/dragger",
            },
          ],
        },
        {
          type: "category",
          label: "Comments",
          items: [
            {
              type: "doc",
              label: "Workspace comments",
              id: "blockly/guides/configure/web/workspace_comment",
            },
            {
              type: "doc",
              label: "Block comments",
              id: "blockly/guides/configure/web/block_comment",
            },
          ],
        },
        {
          type: "doc",
          label: "Localization",
          id: "blockly/guides/configure/web/translations",
        },
        {
          type: "doc",
          label: "Focus system",
          id: "blockly/guides/configure/web/focus",
        },
        {
          type: "doc",
          label: "Advanced customization",
          id: "blockly/guides/configure/web/customization",
        },
        {
          type: "category",
          label: "Accessibility",
          items: [
            {
              type: "doc",
              label: "Keyboard navigation",
              id: "blockly/guides/configure/web/keyboard-nav",
            },
            {
              type: "doc",
              label: "Colour and accessibility",
              id: "blockly/guides/configure/web/colour-a11y",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Build your blocks",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "blockly/guides/create-custom-blocks/overview",
        },
        {
          type: "category",
          label: "Block definitions",
          items: [
            {
              type: "doc",
              label: "What's a block definition?",
              id: "blockly/guides/create-custom-blocks/define/block-definitions",
            },
            {
              type: "category",
              label: "Ways to define blocks",
              items: [
                {
                  type: "doc",
                  label: "Blockly Developer Tools",
                  id: "blockly/guides/create-custom-blocks/blockly-developer-tools",
                },
                {
                  type: "doc",
                  label: "JSON and JavaScript",
                  id: "blockly/guides/create-custom-blocks/define/json-and-js",
                },
                {
                  type: "doc",
                  label: "Extensions and mixins",
                  id: "blockly/guides/create-custom-blocks/define/extensions",
                },
                {
                  type: "doc",
                  label: "Modify block definitions",
                  id: "blockly/guides/create-custom-blocks/define/modify-definitions",
                },
              ],
            },
            {
              type: "category",
              label: "Block structure",
              items: [
                {
                  type: "doc",
                  label: "Anatomy of a block",
                  id: "blockly/guides/create-custom-blocks/define/block-anatomy",
                },
                {
                  type: "doc",
                  label: "Top-level connections",
                  id: "blockly/guides/create-custom-blocks/define/top-level-connections",
                },
                {
                  type: "doc",
                  label: "Block structure in JSON",
                  id: "blockly/guides/create-custom-blocks/define/structure-json",
                },
                {
                  type: "doc",
                  label: "Block structure in JavaScript",
                  id: "blockly/guides/create-custom-blocks/define/structure-js",
                },
                {
                  type: "doc",
                  label: "Inline vs external inputs",
                  id: "blockly/guides/create-custom-blocks/define/inline-vs-external",
                },
              ],
            },
            {
              type: "doc",
              label: "Block state",
              id: "blockly/guides/create-custom-blocks/define/block-state",
            },
            {
              type: "doc",
              label: "Destroy hook",
              id: "blockly/guides/create-custom-blocks/define/destroy",
            },
            {
              type: "doc",
              label: "Block help",
              id: "blockly/guides/create-custom-blocks/define/block-help",
            },
          ],
        },
        {
          type: "category",
          label: "Code generation",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "blockly/guides/create-custom-blocks/code-generation/overview",
            },
            {
              type: "doc",
              label: "Block-code generators",
              id: "blockly/guides/create-custom-blocks/code-generation/block-code",
            },
            {
              type: "doc",
              label: "Transform field values",
              id: "blockly/guides/create-custom-blocks/code-generation/fields",
            },
            {
              type: "doc",
              label: "Add parentheses",
              id: "blockly/guides/create-custom-blocks/code-generation/operator-precedence",
            },
            {
              type: "doc",
              label: "Cache inner value block code",
              id: "blockly/guides/create-custom-blocks/code-generation/caching-arguments",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          items: [
            {
              type: "doc",
              label: "CConnection checks",
              id: "blockly/guides/create-custom-blocks/inputs/connection-checks",
            },
            {
              type: "doc",
              label: "Connection check playbook",
              id: "blockly/guides/create-custom-blocks/inputs/connection-check-playbook",
            },
            {
              type: "doc",
              label: "Custom connection checkers",
              id: "blockly/guides/create-custom-blocks/inputs/connection_checker",
            },
            {
              type: "doc",
              label: "Connection previewers",
              id: "blockly/guides/create-custom-blocks/inputs/connection-previews",
            },
          ],
        },
        {
          type: "category",
          label: "Inputs",
          items: [
            {
              type: "doc",
              label: "Create custom inputs",
              id: "blockly/guides/create-custom-blocks/inputs/creating-custom-inputs",
            },
          ],
        },
        {
          type: "category",
          label: "Fields",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "blockly/guides/create-custom-blocks/fields/overview",
            },
            {
              type: "doc",
              label: "Fields vs icons",
              id: "blockly/guides/create-custom-blocks/fields/fields-vs-icons",
            },
            {
              type: "doc",
              label: "Anatomy of a field",
              id: "blockly/guides/create-custom-blocks/fields/anatomy-of-a-field",
            },
            {
              type: "doc",
              label: "Validators",
              id: "blockly/guides/create-custom-blocks/fields/validators",
            },
            {
              type: "category",
              label: "Built-in fields",
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "blockly/guides/create-custom-blocks/fields/built-in-fields/overview",
                },
                {
                  type: "doc",
                  label: "Checkbox",
                  id: "blockly/guides/create-custom-blocks/fields/built-in-fields/checkbox",
                },
                {
                  type: "doc",
                  label: "Dropdown",
                  id: "blockly/guides/create-custom-blocks/fields/built-in-fields/dropdown",
                },
                {
                  type: "doc",
                  label: "Image",
                  id: "blockly/guides/create-custom-blocks/fields/built-in-fields/image",
                },
                {
                  type: "doc",
                  label: "Label",
                  id: "blockly/guides/create-custom-blocks/fields/built-in-fields/label",
                },
                {
                  type: "doc",
                  label: "Label (serializable)",
                  id: "blockly/guides/create-custom-blocks/fields/built-in-fields/label-serializable",
                },
                {
                  type: "doc",
                  label: "Number",
                  id: "blockly/guides/create-custom-blocks/fields/built-in-fields/number",
                },
                {
                  type: "doc",
                  label: "Text input",
                  id: "blockly/guides/create-custom-blocks/fields/built-in-fields/text-input",
                },
                {
                  type: "doc",
                  label: "Variable",
                  id: "blockly/guides/create-custom-blocks/fields/built-in-fields/variable",
                },
              ],
            },
            {
              type: "category",
              label: "Custom fields",
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "blockly/guides/create-custom-blocks/fields/customizing-fields/overview",
                },
                {
                  type: "doc",
                  label: "Extend an existing field",
                  id: "blockly/guides/create-custom-blocks/fields/customizing-fields/extending",
                },
                {
                  type: "doc",
                  label: "Create a custom field",
                  id: "blockly/guides/create-custom-blocks/fields/customizing-fields/creating",
                },
                {
                  type: "doc",
                  label: "Upgrade a custom field",
                  id: "blockly/guides/create-custom-blocks/fields/customizing-fields/upgrading",
                },
              ],
            },
          ],
        },
        {
          type: "doc",
          label: "Variables",
          id: "blockly/guides/create-custom-blocks/variables",
        },
        {
          type: "category",
          label: "Procedures",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "blockly/guides/create-custom-blocks/procedures/overview",
            },
            {
              type: "doc",
              label: "Use built-in procedure blocks",
              id: "blockly/guides/create-custom-blocks/procedures/using-procedures",
            },
            {
              type: "doc",
              label: "Create custom procedure blocks",
              id: "blockly/guides/create-custom-blocks/procedures/creating-custom-procedure-blocks",
            },
            {
              type: "doc",
              label: "Create custom procedure data models",
              id: "blockly/guides/create-custom-blocks/procedures/creating-custom-procedure-data-models",
            },
          ],
        },
        {
          type: "category",
          label: "Icons",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "blockly/guides/create-custom-blocks/icons/overview",
            },
            {
              type: "doc",
              label: "Fields vs icons",
              id: "blockly/guides/create-custom-blocks/fields/fields-vs-icons",
            },
            {
              type: "doc",
              label: "Override comment icon",
              id: "blockly/guides/create-custom-blocks/icons/creating-custom-icons/override-built-in",
            },
            {
              type: "category",
              label: "Create custom icons",
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "blockly/guides/create-custom-blocks/icons/creating-custom-icons/basic-implementation",
                },
                {
                  type: "doc",
                  label: "Save and load icons",
                  id: "blockly/guides/create-custom-blocks/icons/creating-custom-icons/save-and-load",
                },
                {
                  type: "doc",
                  label: "Use pop-up bubbles",
                  id: "blockly/guides/create-custom-blocks/icons/creating-custom-icons/use-bubbles",
                },
                {
                  type: "doc",
                  label: "Create custom bubbles",
                  id: "blockly/guides/create-custom-blocks/icons/creating-custom-icons/creating-custom-bubbles",
                },
                {
                  type: "doc",
                  label: "Use custom icons",
                  id: "blockly/guides/create-custom-blocks/icons/creating-custom-icons/use-custom-icons",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Block shape",
          items: [
            {
              type: "doc",
              label: "Mutators",
              id: "blockly/guides/create-custom-blocks/mutators",
            },
            {
              type: "category",
              label: "Renderers",
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "blockly/guides/create-custom-blocks/renderers/overview",
                },
                {
                  type: "category",
                  label: "Concepts",
                  items: [
                    {
                      type: "doc",
                      label: "Overview",
                      id: "blockly/guides/create-custom-blocks/renderers/concepts/overview",
                    },
                    {
                      type: "doc",
                      label: "Renderer",
                      id: "blockly/guides/create-custom-blocks/renderers/concepts/renderer",
                    },
                    {
                      type: "doc",
                      label: "Constant provider",
                      id: "blockly/guides/create-custom-blocks/renderers/concepts/constants",
                    },
                    {
                      type: "doc",
                      label: "Render info",
                      id: "blockly/guides/create-custom-blocks/renderers/concepts/info",
                    },
                    {
                      type: "doc",
                      label: "Path object",
                      id: "blockly/guides/create-custom-blocks/renderers/concepts/path-object",
                    },
                    {
                      type: "doc",
                      label: "Drawer",
                      id: "blockly/guides/create-custom-blocks/renderers/concepts/drawer",
                    },
                    {
                      type: "doc",
                      label: "Rows",
                      id: "blockly/guides/create-custom-blocks/renderers/concepts/rows",
                    },
                    {
                      type: "doc",
                      label: "Elements",
                      id: "blockly/guides/create-custom-blocks/renderers/concepts/elements",
                    },
                  ],
                },
                {
                  type: "doc",
                  label: "Create custom renderers",
                  id: "blockly/guides/create-custom-blocks/renderers/create-custom-renderers/basic-implementation",
                },
                {
                  type: "doc",
                  label: "Connection shapes",
                  id: "blockly/guides/create-custom-blocks/renderers/create-custom-renderers/connection-shapes",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Build your application",
      items: [
        {
          type: "category",
          label: "Generate and run code",
          items: [
            {
              type: "doc",
              label: "Generate and run code",
              id: "blockly/guides/app-integration/run-code",
            },
            {
              type: "doc",
              label: "Generate and run JavaScript",
              id: "blockly/guides/app-integration/running-javascript",
            },
          ],
        },
        {
          type: "doc",
          label: "Attribute Blockly",
          id: "blockly/guides/app-integration/attribution",
        },
      ],
    },
    {
      type: "category",
      label: "Contribute to Blockly",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "blockly/guides/contribute/index",
        },
        {
          type: "category",
          label: "Get started",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "blockly/guides/contribute/get-started/index",
            },
            {
              type: "doc",
              label: "Development tools",
              id: "blockly/guides/contribute/get-started/development_tools",
            },
            {
              type: "doc",
              label: "Write a good issue",
              id: "blockly/guides/contribute/get-started/write_a_good_issue",
            },
            {
              type: "doc",
              label: "Write a good pull request",
              id: "blockly/guides/contribute/get-started/write_a_good_pr",
            },
            {
              type: "doc",
              label: "Commit message guide",
              id: "blockly/guides/contribute/get-started/commits",
            },
            {
              type: "doc",
              label: "Code review process",
              id: "blockly/guides/contribute/get-started/pr_review_process",
            },
            {
              type: "doc",
              label: "Issue labels",
              id: "blockly/guides/contribute/get-started/issue_labels",
            },
            {
              type: "doc",
              label: "Use the playground",
              id: "blockly/guides/contribute/get-started/playground",
            },
          ],
        },
        {
          type: "category",
          label: "Contribute to core",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "blockly/guides/contribute/core/index",
            },
            {
              type: "category",
              label: "Core architecture",
              items: [
                {
                  type: "doc",
                  label: "Render management",
                  id: "blockly/guides/contribute/core-architecture/render-management",
                },
              ],
            },
            {
              type: "doc",
              label: "Style guide",
              id: "blockly/guides/contribute/core/style_guide",
            },
            {
              type: "doc",
              label: "Build scripts",
              id: "blockly/guides/contribute/core/building",
            },
            {
              type: "doc",
              label: "Advanced compilation",
              id: "blockly/guides/contribute/core/advanced",
            },
            {
              type: "category",
              label: "Localization",
              items: [
                {
                  type: "doc",
                  label: "Add a new localization token",
                  id: "blockly/guides/contribute/core/add_localization_token",
                },
                {
                  type: "doc",
                  label: "Translate text",
                  id: "blockly/guides/contribute/core/translating",
                },
                {
                  type: "doc",
                  label: "Klingon",
                  id: "blockly/guides/contribute/core/klingon",
                },
              ],
            },
            {
              type: "doc",
              label: "Unit tests",
              id: "blockly/guides/contribute/core/unit_testing",
            },
          ],
        },
        {
          type: "category",
          label: "Contribute to samples",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "blockly/guides/contribute/samples/index",
            },
            {
              type: "doc",
              label: "Repository structure",
              id: "blockly/guides/contribute/samples/repository_structure",
            },
            {
              type: "category",
              label: "Plugins",
              items: [
                {
                  type: "doc",
                  label: "Add a plugin",
                  id: "blockly/guides/contribute/samples/add_a_plugin",
                },
                {
                  type: "doc",
                  label: "Plugin naming conventions",
                  id: "blockly/guides/contribute/samples/naming",
                },
                {
                  type: "doc",
                  label: "Debug plugins",
                  id: "blockly/guides/contribute/samples/debugging",
                },
                {
                  type: "doc",
                  label: "Publish block libraries",
                  id: "blockly/guides/contribute/samples/block_libraries",
                },
                {
                  type: "doc",
                  label: "Add a plugin field to Block Factory",
                  id: "blockly/guides/contribute/samples/block_factory",
                },
              ],
            },
            {
              type: "doc",
              label: "Write a codelab",
              id: "blockly/guides/contribute/samples/write_a_codelab",
            },
          ],
        },
      ],
    },
  ],
  referenceSidebar: referenceSidebar
};

export default sidebars;
