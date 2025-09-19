import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a4b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '83c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '671'),
            routes: [
              {
                path: '/docs/guides/configure/web/configuration_struct',
                component: ComponentCreator('/docs/guides/configure/web/configuration_struct', '1f1'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/configure/web/translations',
                component: ComponentCreator('/docs/guides/configure/web/translations', '2f5'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/create-custom-blocks/code-generation/block-code',
                component: ComponentCreator('/docs/guides/create-custom-blocks/code-generation/block-code', '7c9'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/create-custom-blocks/define/block-anatomy',
                component: ComponentCreator('/docs/guides/create-custom-blocks/define/block-anatomy', '854'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/create-custom-blocks/define/json-and-js',
                component: ComponentCreator('/docs/guides/create-custom-blocks/define/json-and-js', '4b0'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/create-custom-blocks/define/legacy-blockly-developer-tools',
                component: ComponentCreator('/docs/guides/create-custom-blocks/define/legacy-blockly-developer-tools', '2e4'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/create-custom-blocks/fields/built-in-fields/dropdown',
                component: ComponentCreator('/docs/guides/create-custom-blocks/fields/built-in-fields/dropdown', '292'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/create-custom-blocks/fields/customizing-fields/creating',
                component: ComponentCreator('/docs/guides/create-custom-blocks/fields/customizing-fields/creating', 'f39'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/get-started/what-is-blockly',
                component: ComponentCreator('/docs/guides/get-started/what-is-blockly', '323'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/get-started/workspace-anatomy',
                component: ComponentCreator('/docs/guides/get-started/workspace-anatomy', 'd49'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/guides/programming/forking_blockly',
                component: ComponentCreator('/docs/guides/programming/forking_blockly', '474'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
