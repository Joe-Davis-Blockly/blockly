---
description: How to define a category toolbox, which arranges sets of blocks into categories.
---

# Define a category toolbox

A category toolbox has multiple sets of blocks that are arranged into different
categories.

![A category toolbox with Control and Logic categories. The Logic category is
open and the flyout toolbox contains comparison, and-or, and true-false
blocks.](/blockly/images/toolbox-categories.png)

To create a category toolbox, pass JSON or XML describing the toolbox to the
`toolbox` property of the [configuration
options](/blockly/guides/configure/web/configuration_struct#the_options_dictionary).

*   {JSON}

    ```js
    var toolbox = {
        "kind": "categoryToolbox",
        "contents": [
          {
            "kind": "category",
            "name": "Control",
            "contents": [
              {
                "kind": "block",
                "type": "controls_if"
              },
            ]
          },
          {
            "kind": "category",
            "name": "Logic",
            "contents": [
              {
                "kind": "block",
                "type": "logic_compare"
              },
              {
                "kind": "block",
                "type": "logic_operation"
              },
              {
                "kind": "block",
                "type": "logic_boolean"
              }
            ]
          }
        ]
      };
    var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});
    ```

*   {XML}

    ```xml
    <xml id="toolbox" style="display: none">
      <category name="Control">
        <block type="controls_if"></block>
      </category>
      <category name="Logic">
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_boolean"></block>
      </category>
    </xml>
    <script>
      var workspace = Blockly.inject('blocklyDiv',
          {toolbox: document.getElementById('toolbox')});
    </script>
    ```

*   {XML String}

    ```js
    var toolbox = '<xml id="toolbox" style="display: none">' +
        '<category name="Control">' +
        '<block type="controls_if"></block>' +
        '</category>' +
        '<category name="Logic">' +
        '<block type="logic_compare"></block>' +
        '<block type="logic_operation"></block>' +
        '<block type="logic_boolean"></block>' +
        '</category>' +
        '</xml>';
    var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});
    ```
