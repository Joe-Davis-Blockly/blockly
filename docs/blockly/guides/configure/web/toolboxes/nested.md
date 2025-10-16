Project: /blockly/_project.yaml
Book: /blockly/_book.yaml
description: How to nest toolbox categories.

# Nested categories

Categories may be nested within other categories. Here are two top-level
categories ('Core' and 'Custom'), the second of which contains two sub-categories,
each of which contain blocks:

Note that it is possible for a category to contain both sub-categories *and*
blocks. In the following example, `Custom` has two sub-categories (`Move` and
`Turn`), as well as a block of its own (`start`).

*   {JSON}

    ```js
    {
      "kind": "categoryToolbox",
      "contents": [
        {
          "kind": "category",
          "name": "Core",
          "contents": [
            {
              "kind": "block",
              "type": "controls_if"
            },
            {
              "kind": "block",
              "type": "logic_compare"
            },
          ]
        },
        {
          "kind": "category",
          "name": "Custom",
          "contents": [
            {
              "kind": "block",
              "type": "start"
            },
            {
              "kind": "category",
              "name": "Move",
              "contents": [
                {
                  "kind": "block",
                  "type": "move_forward"
                }
              ]
            },
            {
              "kind": "category",
              "name": "Turn",
              "contents": [
                {
                  "kind": "block",
                  "type": "turn_left"
                }
              ]
            }
          ]
        }
      ]
    }
    ```

*   {XML}

    ```xml
    <xml id="toolbox" style="display: none">
      <category name="Core">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
      </category>
      <category name="Custom">
        <block type="start"></block>
        <category name="Move">
          <block type="move_forward"></block>
        </category>
        <category name="Turn">
          <block type="turn_left"></block>
        </category>
      </category>
    </xml>
    ```
