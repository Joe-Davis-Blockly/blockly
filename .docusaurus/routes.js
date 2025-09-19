import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blockly/blog',
    component: ComponentCreator('/blockly/blog', 'a5c'),
    exact: true
  },
  {
    path: '/blockly/blog/archive',
    component: ComponentCreator('/blockly/blog/archive', 'fa2'),
    exact: true
  },
  {
    path: '/blockly/blog/authors',
    component: ComponentCreator('/blockly/blog/authors', 'e9b'),
    exact: true
  },
  {
    path: '/blockly/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blockly/blog/authors/all-sebastien-lorber-articles', '70a'),
    exact: true
  },
  {
    path: '/blockly/blog/authors/yangshun',
    component: ComponentCreator('/blockly/blog/authors/yangshun', 'f72'),
    exact: true
  },
  {
    path: '/blockly/blog/first-blog-post',
    component: ComponentCreator('/blockly/blog/first-blog-post', '753'),
    exact: true
  },
  {
    path: '/blockly/blog/long-blog-post',
    component: ComponentCreator('/blockly/blog/long-blog-post', '35e'),
    exact: true
  },
  {
    path: '/blockly/blog/mdx-blog-post',
    component: ComponentCreator('/blockly/blog/mdx-blog-post', 'ea8'),
    exact: true
  },
  {
    path: '/blockly/blog/tags',
    component: ComponentCreator('/blockly/blog/tags', '5c6'),
    exact: true
  },
  {
    path: '/blockly/blog/tags/docusaurus',
    component: ComponentCreator('/blockly/blog/tags/docusaurus', '167'),
    exact: true
  },
  {
    path: '/blockly/blog/tags/facebook',
    component: ComponentCreator('/blockly/blog/tags/facebook', '273'),
    exact: true
  },
  {
    path: '/blockly/blog/tags/hello',
    component: ComponentCreator('/blockly/blog/tags/hello', 'a88'),
    exact: true
  },
  {
    path: '/blockly/blog/tags/hola',
    component: ComponentCreator('/blockly/blog/tags/hola', '8b8'),
    exact: true
  },
  {
    path: '/blockly/blog/welcome',
    component: ComponentCreator('/blockly/blog/welcome', 'd48'),
    exact: true
  },
  {
    path: '/blockly/markdown-page',
    component: ComponentCreator('/blockly/markdown-page', '05e'),
    exact: true
  },
  {
    path: '/blockly/search',
    component: ComponentCreator('/blockly/search', 'fae'),
    exact: true
  },
  {
    path: '/blockly/docs',
    component: ComponentCreator('/blockly/docs', '83b'),
    routes: [
      {
        path: '/blockly/docs',
        component: ComponentCreator('/blockly/docs', 'ce5'),
        routes: [
          {
            path: '/blockly/docs',
            component: ComponentCreator('/blockly/docs', 'e46'),
            routes: [
              {
                path: '/blockly/docs/guides/configure/web/configuration_struct',
                component: ComponentCreator('/blockly/docs/guides/configure/web/configuration_struct', '71d'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/docs/guides/configure/web/translations',
                component: ComponentCreator('/blockly/docs/guides/configure/web/translations', '794'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/docs/guides/create-custom-blocks/code-generation/block-code',
                component: ComponentCreator('/blockly/docs/guides/create-custom-blocks/code-generation/block-code', '7cb'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/docs/guides/create-custom-blocks/define/block-anatomy',
                component: ComponentCreator('/blockly/docs/guides/create-custom-blocks/define/block-anatomy', '5b6'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/docs/guides/create-custom-blocks/define/json-and-js',
                component: ComponentCreator('/blockly/docs/guides/create-custom-blocks/define/json-and-js', 'e28'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/docs/guides/create-custom-blocks/define/legacy-blockly-developer-tools',
                component: ComponentCreator('/blockly/docs/guides/create-custom-blocks/define/legacy-blockly-developer-tools', '6b3'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/docs/guides/create-custom-blocks/fields/built-in-fields/dropdown',
                component: ComponentCreator('/blockly/docs/guides/create-custom-blocks/fields/built-in-fields/dropdown', 'cbf'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/docs/guides/create-custom-blocks/fields/customizing-fields/creating',
                component: ComponentCreator('/blockly/docs/guides/create-custom-blocks/fields/customizing-fields/creating', 'e95'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/docs/guides/get-started/what-is-blockly',
                component: ComponentCreator('/blockly/docs/guides/get-started/what-is-blockly', '6fc'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/docs/guides/get-started/workspace-anatomy',
                component: ComponentCreator('/blockly/docs/guides/get-started/workspace-anatomy', 'e00'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/docs/guides/programming/forking_blockly',
                component: ComponentCreator('/blockly/docs/guides/programming/forking_blockly', '8ea'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/blockly/docs/intro',
                component: ComponentCreator('/blockly/docs/intro', 'cd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/blockly/docs/tutorial-basics/congratulations', 'c11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/blockly/docs/tutorial-basics/create-a-blog-post', '523'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/blockly/docs/tutorial-basics/create-a-document', '99e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/blockly/docs/tutorial-basics/create-a-page', '316'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/blockly/docs/tutorial-basics/deploy-your-site', '0b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/blockly/docs/tutorial-basics/markdown-features', '1bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/blockly/docs/tutorial-extras/manage-docs-versions', 'cbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blockly/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/blockly/docs/tutorial-extras/translate-your-site', '2c8'),
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
    path: '/blockly/',
    component: ComponentCreator('/blockly/', '2aa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
