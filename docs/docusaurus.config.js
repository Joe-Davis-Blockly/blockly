// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

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

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['md', 'mdx'],
      },
    ]
  ],

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
            'https://github.com/Joe-Davis-Blockly/blockly/tree/cybage-blockly/docs',
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
      image: 'images/blockly_banner.png',
      navbar: {
        title: 'Blockly',
        logo: {
          alt: 'Blockly Logo',
          src: 'img/logo.svg',
          srcDark: 'img/blockly-dark-theme-logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Guides',
            position: 'left',
            items: [
              {
                label: 'Get started',
                to: 'guides/get-started/what-is-blockly',
              },
              {
                label: 'Design considerations',
                to: 'guides/design/app-overview',
              },
              {
                label: 'Programming considerations',
                to: 'guides/programming/using_blockly_apis',
              },
              {
                label: 'Build your editor',
                to: 'guides/configure/web/configuration_struct',
              },
              {
                label: 'Build your blocks',
                to: 'guides/create-custom-blocks/overview',
              },
              {
                label: 'Build your application',
                to: 'guides/app-integration/run-code',
              },
              {
                label: 'Contribute to Blockly',
                to: 'guides/contribute/index',
              },
            ],
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
            label: 'Samples',
            href: 'https://raspberrypifoundation.github.io/blockly-samples/',
            position: 'right',
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
        additionalLanguages: ['bash', 'typescript'],
      },
      algolia: {
        appId: "JOPASJ603L",
        apiKey: "9a6e9f24a807a1571990048ef66c9438", // safe to expose
        indexName: "Docusaurus_Website",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: "search",
        askAi: {
          indexName: 'markdown-index',
          apiKey: '9a6e9f24a807a1571990048ef66c9438',
          appId: 'JOPASJ603L',
          assistantId: '0JvuvoDNFavC',
        },
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        copyright: 'Blockly is an open source project of the Raspberry Pi Foundation, a UK registered charity (1129409), supported by Google.',
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
            ],
          },
          {
            title: 'Learn',
            items: [
              {
                label: 'Codelabs',
                to: '/blockly/codelabs/index',
              },
              {
                label: 'Samples and Demos',
                to: 'https://raspberrypifoundation.github.io/blockly-samples/',
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
                label: 'YouTube',
                to: 'https://www.youtube.com/@blocklydev',
              },
              {
                label: 'Report Issue',
                to: 'https://github.com/RaspberryPiFoundation/blockly/issues',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Team',
                to: 'http://blockly.com/team',
              },
              {
                label: 'Contact',
                to: 'mailto:support@blockly.com',
              },
              {
                label: 'Privacy',
                to: 'https://www.raspberrypi.org/privacy/',
              },
              {
                label: 'Cookies',
                to: 'https://www.raspberrypi.org/cookies/',
              },
            ],
          },
        ]
      },
    }),
};

export default config;
