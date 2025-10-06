import {referenceSidebar} from './docs/reference/_reference'

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
      "id": "codelabs/index",
    },
    {
      type: 'category',
      label: 'Getting started with Blockly',
      items: [
        {
          "type": "doc",
          "label": "1. Codelab-overview",
          "id": "codelabs/getting-started/getting_started"
        },
        {
          "type": "doc",
          "label": "2. Setup",
          "id": "codelabs/getting-started/setup"
        },
        {
          "type": "doc",
          "label": "3. Explore the app",
          "id": "codelabs/getting-started/explore-the-app"
        },
        {
          "type": "doc",
          "label": "4. Add Blockly libraries",
          "id": "codelabs/getting-started/add-blockly-libraries"
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
          "id": "codelabs/custom-generator/custom_generator",
        },
      ]
    },
  ],
  guidesSidebar: [
    {
      "type": "category",
      "label": "Get started",
      "items": [
        {
          "type": "doc",
          "label": "What is Blockly?",
          "id": "guides/get-started/what-is-blockly"
        },
        {
          "type": "doc",
          "label": "Visual glossary",
          "id": "guides/get-started/workspace-anatomy"
        },
        {
          "type": "doc",
          "label": "Visual glossary copy",
          "id": "guides/get-started/workspace-anatomy-copy"
        }
      ]
    },
    {
      "type": "category",
      "label": "Programming considerations",
      "items": [
        {
          "type": "doc",
          "label": "Fork Blockly",
          "id": "guides/programming/forking_blockly"
        }
      ]
    },
    {
      "type": "category",
      "label": "Build your editor",
      "items": [
        {
          "type": "category",
          "label": "Workspaces",
          "items": [
            {
              "type": "category",
              "label": "Create a workspace",
              "items": [
                {
                  "type": "doc",
                  "label": "Create a workspace",
                  "id": "guides/configure/web/configuration_struct"
                },
                {
                  "type": "doc",
                  "label": "Create a workspace copy",
                  "id": "guides/configure/web/configuration_struct_copy"
                }
              ]
            }
          ]
        },
        {
          "type": "doc",
          "label": "Localization",
          "id": "guides/configure/web/translations"
        }
      ]
    },
    {
      "type": "category",
      "label": "Build your blocks",
      "items": [
        {
          "type": "category",
          "label": "Block definitions",
          "items": [
            {
              "type": "category",
              "label": "Ways to define blocks",
              "items": [
                {
                  "type": "doc",
                  "label": "JSON and JavaScript",
                  "id": "guides/create-custom-blocks/define/json-and-js"
                },
                {
                  "type": "doc",
                  "label": "Legacy Blockly Developer Tools",
                  "id": "guides/create-custom-blocks/define/legacy-blockly-developer-tools"
                }
              ]
            },
            {
              "type": "category",
              "label": "Block structure",
              "items": [
                {
                  "type": "doc",
                  "label": "Anatomy of a block",
                  "id": "guides/create-custom-blocks/define/block-anatomy"
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "Code generation",
          "items": [
            {
              "type": "doc",
              "label": "Block-code generators",
              "id": "guides/create-custom-blocks/code-generation/block-code"
            }
          ]
        },
        {
          "type": "category",
          "label": "Fields",
          "items": [
            {
              "type": "category",
              "label": "Built-in fields",
              "items": [
                {
                  "type": "doc",
                  "label": "Dropdown",
                  "id": "guides/create-custom-blocks/fields/built-in-fields/dropdown"
                }
              ]
            },
            {
              "type": "category",
              "label": "Custom fields",
              "items": [
                {
                  "type": "doc",
                  "label": "Create a custom field",
                  "id": "guides/create-custom-blocks/fields/customizing-fields/creating"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  referenceSidebar: referenceSidebar
};

export default sidebars;
