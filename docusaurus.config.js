// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkAttributes from 'remark-attributes';

/**
 * A custom function to generate URL-friendly slugs with underscores.
 * This avoids needing external dependencies.
 * @param {string} str The heading text.
 * @returns {string} The generated slug.
 */
const createUnderscoreSlug = (str) => {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9_\- ]/g, '')  // Remove all characters except a-z, 0-9, hyphen, underscore, and space
    .replace(/[ ][ ]+/g, ' ')         // Replace multiple spaces with a single space
    .replace(/[ ]/g, '_')      // Replace single spaces with underscores
};

// =============================================================================
// PART 2: THE PREPROCESSOR BOILERPLATE (You can safely ignore this part)
// =============================================================================

const headingIdPreprocessor = ({ fileContent }) => {
  const lines = fileContent.split('\n');
  const processedLines = lines.map((line) => {
    const headingRegex = /^(#{1,6}\s+.*)/;
    if (headingRegex.test(line) && !line.includes('{#')) {
      const headingText = line.replace(/^#{1,6}\s+/, '');
      const slug = createUnderscoreSlug(headingText);
      return `${line} {#${slug}}`;
    }
    return line;
  });
  return processedLines.join('\n');
};

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blockly Docs',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://joe-davis-blockly.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blockly/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Joe-Davis-Blockly', // Usually your GitHub org/user name.
  projectName: 'blockly', // Usually your repo name.

  onBrokenLinks: 'warn',
  //onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'detect',
    preprocessor: headingIdPreprocessor,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Joe-Davis-Blockly/blockly/tree/cybage-blockly/',
          remarkPlugins: [remarkAttributes],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        // Will be passed to @docusaurus/plugin-google-tag-manager (only enabled when explicitly specified)
        googleTagManager: {
          containerId: 'GTM-NSSCB6XT',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.svg',
      navbar: {
        title: 'Blockly',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            label: 'Guides',
            sidebarId: 'guidesSidebar',
            position: 'left',
          },
          {
            type: 'docSidebar',
            label: 'Reference',
            sidebarId: 'referenceSidebar',
            position: 'left',
          },
          {
            type: 'docSidebar',
            label: 'Codelabs',
            sidebarId: 'tutorialSidebar',
            position: 'left',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/raspberrypifoundation/blockly',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: "JOPASJ603L",
        apiKey: "9a6e9f24a807a1571990048ef66c9438", // safe to expose
        indexName: "Docs websites",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: "search", // creates a dedicated search page
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        copyright: 'Raspberry Pi Foundation UK registered charity 1129409',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/blockly/guides/get-started/what-is-blockly',
              },
              {
                label: 'Reference',
                to: '/blockly/reference/js/blockly',
              },
              {
                label: 'Codelabs',
                to: '/blockly/codelabs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community Forum',
                to: 'https://groups.google.com/g/blockly',
              },
              {
                label: 'Blockly Summit',
                to: 'http://www.blocklysummit.com',
              },
              {
                label: 'Blockly Youtube',
                to: 'https://www.youtube.com/@blocklydev',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Contact Us',
                to: 'mailto:support@blockly.com',
              },
            ],
          },
        ]
      },
    }),
};

export default config;
