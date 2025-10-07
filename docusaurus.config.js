// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

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
    .replace(/<[^>]*>/g, '')      // Remove HTML tags from heading text
    .replace(/[\s]+/g, '_')      // Replace spaces and hyphens with underscores
    .replace(/__+/g, '_')         // Replace multiple underscores with a single one
};

// =============================================================================
// PART 2: THE PREPROCESSOR BOILERPLATE (You can safely ignore this part)
// =============================================================================

const headingIdPreprocessor = ({fileContent}) => {
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
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

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

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  markdown: {
    format: 'detect',
    preprocessor: headingIdPreprocessor,
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
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Joe-Davis-Blockly/blockly/tree/cybage-blockly/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
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
            label: 'Blog',
            to: '/blog',
            position: 'left'
          },
          {
            label: 'GitHub',
            href: 'https://github.com/facebook/docusaurus',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: "3L7M0G58CU",
        apiKey: "829449d897d77038c5d39153d1313ec1", // safe to expose
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
    }),
};

export default config;
