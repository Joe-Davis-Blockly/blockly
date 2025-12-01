/**
 * Mapping configuration for codelab routes
 * Maps codelab categories and steps to their URL structure and hash values
 */

/**
 * Maps codelab category to its base path (without /blockly prefix)
 * and defines the step order with their corresponding hash values
 */
export const codelabMapping = {
  'getting-started': {
    basePath: 'blockly/codelabs/getting-started',
    steps: [
      { id: 'codelab-overview', hash: 0, label: '1. Codelab-overview' },
      { id: 'setup', hash: 1, label: '2. Setup' },
      { id: 'explore-the-app', hash: 2, label: '3. Explore the app' },
      { id: 'add-blockly-libraries', hash: 3, label: '4. Add Blockly libraries' },
      { id: 'create-a-blockly-workspace', hash: 4, label: '5. Create a Blockly workspace' },
      { id: 'create-a-custom-block', hash: 5, label: '6. Create a custom block' },
      { id: 'save-load-workspace', hash: 6, label: '7. Save/load workspace' },
      { id: 'generate-javaScript-code', hash: 7, label: '8. Generate JavaScript code' },
      { id: 'run-generated-code', hash: 8, label: '9. Run generated code' },
      { id: 'the-end', hash: 9, label: '10. The End' },
    ],
  },
  'custom-toolbox': {
    basePath: 'blockly/codelabs/custom-toolbox',
    steps: [
      { id: 'codelab-overview', hash: 0, label: '1. Codelab-overview' },
      { id: 'setup', hash: 1, label: '2. Setup' },
      { id: 'change-the-look-of-a-category', hash: 2, label: '3. Change the look of a category' },
      { id: 'change-the-look-of-a-selected-category', hash: 3, label: '4. Change the look of a selected category' },
      { id: 'add-an-icon-to-your-category', hash: 4, label: '5. Add an icon to your category' },
      { id: 'change-the-category-HTML', hash: 5, label: '6. Change the category HTML' },
      { id: 'adding-a-custom-toolbox-item', hash: 6, label: '7. Adding a custom toolbox item' },
      { id: 'summary', hash: 7, label: '8. Summary' },
    ],
  },
  'theme-extension-identifier': {
    basePath: 'blockly/codelabs/theme-extension-identifier',
    steps: [
      { id: 'codelab-overview', hash: 0, label: '1. Codelab-overview' },
      { id: 'setup', hash: 1, label: '2. Setup' },
      { id: 'workspace-theme', hash: 2, label: '3. Workspace Theme' },
      { id: 'customize-components', hash: 3, label: '4. Customize Components' },
      { id: 'customize-category-styles', hash: 4, label: '5. Customize Category Styles' },
      { id: 'customize-block-styles', hash: 5, label: '6. Customize Block Styles' },
      { id: 'summary', hash: 6, label: '7. Summary' },
    ],
  },
  'context-menu-option': {
    basePath: 'blockly/codelabs/context-menu-option',
    steps: [
      { id: 'codelab-overview', hash: 0, label: '1. Codelab-overview' },
      { id: 'setup', hash: 1, label: '2. Setup' },
      { id: 'add-a-context-menu-item', hash: 2, label: '3. Add a context menu item' },
      { id: 'precondition-node-type', hash: 3, label: '4. Precondition: Node type' },
      { id: 'precondition-external-state', hash: 4, label: '5. Precondition: External state' },
      { id: 'precondition-blockly-state', hash: 5, label: '6. Precondition: Blockly state' },
      { id: 'callback', hash: 6, label: '7. Callback' },
      { id: 'display-text', hash: 7, label: '8. Display text' },
      { id: 'weight-and-id', hash: 8, label: '9. Weight and id' },
      { id: 'separators', hash: 9, label: '10. Separators' },
      { id: 'summary', hash: 10, label: '11. Summary' },
    ],
  },
  'validation-and-warnings': {
    basePath: 'blockly/codelabs/validation-and-warnings',
    steps: [
      { id: 'codelab-overview', hash: 0, label: '1. Codelab-overview' },
      { id: 'setup', hash: 1, label: '2. Setup' },
      { id: 'validating-blocks', hash: 2, label: '3. Validating blocks' },
      { id: 'displaying-warnings', hash: 3, label: '4. Displaying warnings' },
      { id: 'summary', hash: 4, label: '5. Summary' },
    ],
  },
  'custom-generator': {
    basePath: 'blockly/codelabs/custom-generator',
    steps: [
      { id: 'codelab-overview', hash: 0, label: '1. Codelab-overview' },
      { id: 'setup', hash: 1, label: '2. Setup' },
      { id: 'the-basics', hash: 2, label: '3. The basics' },
      { id: 'block-generator-overview', hash: 3, label: '4. Block generator overview' },
      { id: 'value-block-generators', hash: 4, label: '5. Value block generators' },
      { id: 'member-block-generator', hash: 5, label: '6. Member block generator' },
      { id: 'array-block-generator', hash: 6, label: '7. Array block generator' },
      { id: 'object-block-generator', hash: 7, label: '8. Object block generator' },
      { id: 'generating-a-stack', hash: 8, label: '9. Generating a stack' },
      { id: 'summary', hash: 9, label: '10. Summary' },
    ],
  },
  'custom-renderer': {
    basePath: 'blockly/codelabs/custom-renderer',
    steps: [
      { id: 'codelab-overview', hash: 0, label: '1. Codelab-overview' },
      { id: 'setup', hash: 1, label: '2. Setup' },
      { id: 'observe-the-built-in-renderers', hash: 2, label: '3. Observe the built-in renderers' },
      { id: 'define-and-register-a-custom-renderer', hash: 3, label: '4. Define and register a custom renderer' },
      { id: 'override-constants', hash: 4, label: '5. Override constants' },
      { id: 'understand-connection-shapes', hash: 5, label: '6. Understand connection shapes' },
      { id: 'change-connection-shapes', hash: 6, label: '7. Change connection shapes' },
      { id: 'typed-connection-shapes', hash: 7, label: '8. Typed connection shapes' },
      { id: 'summary', hash: 8, label: '9. Summary' },
    ],
  },
};

/**
 * Get codelab mapping by category name
 * @param {string} category - The codelab category (e.g., 'getting-started')
 * @returns {object|null} The mapping object or null if not found
 */
export function getCodelabMapping(category) {
  return codelabMapping[category] || null;
}

/**
 * Get step information by doc ID
 * @param {string} docId - The document ID (e.g., 'codelabs/getting-started/setup')
 * @returns {object|null} Object with category, step info, or null if not found
 */
export function getStepByDocId(docId) {
  // Extract category and step from docId
  // Format: codelabs/{category}/{step}
  const match = docId.match(/^codelabs\/([^/]+)\/(.+)$/);
  if (!match) return null;

  const [, category, stepId] = match;
  const mapping = getCodelabMapping(category);
  if (!mapping) return null;

  const step = mapping.steps.find(s => s.id === stepId);
  if (!step) return null;

  return {
    category,
    basePath: mapping.basePath,
    step,
  };
}
