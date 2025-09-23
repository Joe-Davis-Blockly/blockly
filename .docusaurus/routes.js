import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blockly/fr/__docusaurus/debug',
    component: ComponentCreator('/blockly/fr/__docusaurus/debug', '030'),
    exact: true
  },
  {
    path: '/blockly/fr/__docusaurus/debug/config',
    component: ComponentCreator('/blockly/fr/__docusaurus/debug/config', 'e6e'),
    exact: true
  },
  {
    path: '/blockly/fr/__docusaurus/debug/content',
    component: ComponentCreator('/blockly/fr/__docusaurus/debug/content', 'e10'),
    exact: true
  },
  {
    path: '/blockly/fr/__docusaurus/debug/globalData',
    component: ComponentCreator('/blockly/fr/__docusaurus/debug/globalData', '0e6'),
    exact: true
  },
  {
    path: '/blockly/fr/__docusaurus/debug/metadata',
    component: ComponentCreator('/blockly/fr/__docusaurus/debug/metadata', '0c4'),
    exact: true
  },
  {
    path: '/blockly/fr/__docusaurus/debug/registry',
    component: ComponentCreator('/blockly/fr/__docusaurus/debug/registry', 'b05'),
    exact: true
  },
  {
    path: '/blockly/fr/__docusaurus/debug/routes',
    component: ComponentCreator('/blockly/fr/__docusaurus/debug/routes', '2c4'),
    exact: true
  },
  {
    path: '/blockly/fr/blog',
    component: ComponentCreator('/blockly/fr/blog', 'b96'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/archive',
    component: ComponentCreator('/blockly/fr/blog/archive', 'ded'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/authors',
    component: ComponentCreator('/blockly/fr/blog/authors', '4a2'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blockly/fr/blog/authors/all-sebastien-lorber-articles', 'aa4'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/authors/yangshun',
    component: ComponentCreator('/blockly/fr/blog/authors/yangshun', '7b2'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/first-blog-post',
    component: ComponentCreator('/blockly/fr/blog/first-blog-post', '4b2'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/long-blog-post',
    component: ComponentCreator('/blockly/fr/blog/long-blog-post', '65c'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/mdx-blog-post',
    component: ComponentCreator('/blockly/fr/blog/mdx-blog-post', '6aa'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/tags',
    component: ComponentCreator('/blockly/fr/blog/tags', '224'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/tags/docusaurus',
    component: ComponentCreator('/blockly/fr/blog/tags/docusaurus', '1de'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/tags/facebook',
    component: ComponentCreator('/blockly/fr/blog/tags/facebook', '180'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/tags/hello',
    component: ComponentCreator('/blockly/fr/blog/tags/hello', 'e1c'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/tags/hola',
    component: ComponentCreator('/blockly/fr/blog/tags/hola', '2c6'),
    exact: true
  },
  {
    path: '/blockly/fr/blog/welcome',
    component: ComponentCreator('/blockly/fr/blog/welcome', 'ad2'),
    exact: true
  },
  {
    path: '/blockly/fr/markdown-page',
    component: ComponentCreator('/blockly/fr/markdown-page', '16e'),
    exact: true
  },
  {
    path: '/blockly/fr/search',
    component: ComponentCreator('/blockly/fr/search', '709'),
    exact: true
  },
  {
    path: '/blockly/fr/docs',
    component: ComponentCreator('/blockly/fr/docs', '83f'),
    routes: [
      {
        path: '/blockly/fr/docs',
        component: ComponentCreator('/blockly/fr/docs', '521'),
        routes: [
          {
            path: '/blockly/fr/docs',
            component: ComponentCreator('/blockly/fr/docs', '1fd'),
            routes: [
              {
                path: '/blockly/fr/docs/guides/configure/web/configuration_struct',
                component: ComponentCreator('/blockly/fr/docs/guides/configure/web/configuration_struct', '043'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/fr/docs/guides/configure/web/translations',
                component: ComponentCreator('/blockly/fr/docs/guides/configure/web/translations', '605'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/fr/docs/guides/create-custom-blocks/code-generation/block-code',
                component: ComponentCreator('/blockly/fr/docs/guides/create-custom-blocks/code-generation/block-code', 'ebe'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/fr/docs/guides/create-custom-blocks/define/block-anatomy',
                component: ComponentCreator('/blockly/fr/docs/guides/create-custom-blocks/define/block-anatomy', '549'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/fr/docs/guides/create-custom-blocks/define/json-and-js',
                component: ComponentCreator('/blockly/fr/docs/guides/create-custom-blocks/define/json-and-js', '0f2'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/fr/docs/guides/create-custom-blocks/define/legacy-blockly-developer-tools',
                component: ComponentCreator('/blockly/fr/docs/guides/create-custom-blocks/define/legacy-blockly-developer-tools', '9f6'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/fr/docs/guides/create-custom-blocks/fields/built-in-fields/dropdown',
                component: ComponentCreator('/blockly/fr/docs/guides/create-custom-blocks/fields/built-in-fields/dropdown', '9f4'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/fr/docs/guides/create-custom-blocks/fields/customizing-fields/creating',
                component: ComponentCreator('/blockly/fr/docs/guides/create-custom-blocks/fields/customizing-fields/creating', '9dc'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/fr/docs/guides/get-started/what-is-blockly',
                component: ComponentCreator('/blockly/fr/docs/guides/get-started/what-is-blockly', 'db3'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/fr/docs/guides/get-started/workspace-anatomy',
                component: ComponentCreator('/blockly/fr/docs/guides/get-started/workspace-anatomy', '679'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/fr/docs/guides/programming/forking_blockly',
                component: ComponentCreator('/blockly/fr/docs/guides/programming/forking_blockly', 'e0f'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/fr/docs/intro',
                component: ComponentCreator('/blockly/fr/docs/intro', '966'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/fr/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/blockly/fr/docs/tutorial-basics/congratulations', 'bf6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/fr/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/blockly/fr/docs/tutorial-basics/create-a-blog-post', 'bfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/fr/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/blockly/fr/docs/tutorial-basics/create-a-document', '7f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/fr/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/blockly/fr/docs/tutorial-basics/create-a-page', '755'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/fr/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/blockly/fr/docs/tutorial-basics/deploy-your-site', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/fr/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/blockly/fr/docs/tutorial-basics/markdown-features', 'ad0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/fr/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/blockly/fr/docs/tutorial-extras/manage-docs-versions', '5b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/fr/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/blockly/fr/docs/tutorial-extras/translate-your-site', '250'),
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
    path: '/blockly/fr/',
    component: ComponentCreator('/blockly/fr/', 'dff'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
