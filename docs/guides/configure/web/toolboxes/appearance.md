Project: /blockly/_project.yaml
Book: /blockly/_book.yaml
description: How to control the appearance of categories.

# Category appearance

Blockly provides a default categories UI, and with it some basic options for
styling. If you want information about how to do more advanced
styling/configuration of the UI check out the [Customizing a Blockly toolbox
codelab](https://blocklycodelabs.dev/codelabs/custom-toolbox/index.html?index=..%2F..index#0)
and the [2021 Toolbox APIs
talk](https://www.youtube.com/watch?v=JJVX_YuKDbo&list=PLSIUOFhnxEiCjoIwJ0jAdwpTZET73CK7d&index=9&t=1s).

![A category toolbox with six categories. The Variables category is open and
contains variable getter and setter blocks. The color of the blocks matches the
color of the vertical bar to the left of the Variables category
name.](/blockly/images/toolbox-colours.png)

## Category CSS

You can use CSS to style category toolboxes. The entry for each category is
broken into multiple parts, such as its icon, its label, and the row containing
the icon and the label. You can style each part individually.

By default, all parts of the same type (e.g. all labels) are assigned the same
CSS class. Use this class if you want to style all parts of the same type in the
same way. For example, you want all labels to have the same color.

You can also assign each individual part its own CSS class. Use this method if
you want to style individual parts differently. For example, you want each label
to have its own color.

The following table lists the types, descriptions, and default CSS classes of
each part of a category toolbox. If you're having trouble visualizing this, open
the developer tools in your browser and inspect the toolbox.

| Part type           | Description                                                              | Default CSS class                  |
| ------------------- | ------------------------------------------------------------------------ | ---------------------------------- |
| contents            | The `div` that contains all categories.                                  | `blocklyToolboxCategoryGroup`      |
| container           | The `div` that contains a single category and its subcategories.         | `blocklyToolboxCategoryContainer`  |
| row                 | The `div` that contains the category.                                    | `blocklyToolboxCategory`           |                                   |
| rowcontentcontainer | The `div` that contains the label and the icon.                          | `blocklyTreeRowContentContainer`   |
| icon                | The `span` that contains the icon.                                       | `blocklyToolboxCategoryIcon`       |                                   |
| label               | The `span` that contains the label.                                      | `blocklyToolboxCategoryLabel`      |
|                     |                                                                          |                                    |
| selected            | Added to the "row" `div` when the category is selected.                  | `blocklyToolboxSelected`           |
| openicon            | Added to the "icon" `span` when a category with subcategories is open.   | `blocklyToolboxCategoryIconOpen`   |
| closedicon          | Added to the "icon" `span` when a category with subcategories is closed. | `blocklyToolboxCategoryIconClosed` |

As an example, suppose you want all of your labels to be white but each
category's row to have its own background color. To do this, you need custom CSS
classes for each row. You can use the default class for the labels.

![A toolbox with two categories. The category labels are both white, but their
background colors are different.](/blockly/images/toolbox-css.png)

First, assign custom CSS classes in the JSON or XML that defines your
categories:

*   {JSON}

    Set custom CSS classes using the `cssConfig` property.

    ```js
    {
      "kind": "category",
      "name": "My category",
      "cssConfig": {
        "row": "myRow"  // Use the part type ("row") as a key.
      },
      "contents": [...],
    },
    {
      "kind": "category",
      "name": "Your category",
      "cssConfig": {
        "row": "yourRow"
      },
      "contents": [...],
    },
    ```

*   {XML}

    Set custom CSS classes using an attribute whose name is the part type with
    `css-` prepended to it.

    ```xml
    <category name="My category" css-row="myRow">
      ...
    </category>
    <category name="Your category" css-row="yourRow">
      ...
    </category>
    ```

In your CSS file, use the custom classes to assign row colors and the default
class to assign the label color:

```css
.myRow {background-color: green}
.yourRow {background-color: red}
.blocklyToolboxCategoryLabel {color: white}
```

## Themes

Note: While themes are supported, we recommend you use CSS instead of themes to
style your categories.

[Themes](/blockly/guides/configure/web/themes) allow you to specify all of the
colours of your workspace at once, including the colours of your categories.

To use them, you have to associate your category with a particular category
style:

*   {JSON}

    ```js
    {
      "kind": "category",
      "name": "Logic",
      "categorystyle": "logic_category"
    }
    ```

*   {XML}

    ```xml
    <category name="Logic" categorystyle="logic_category"></category>
    ```

#### Colours

You can also specify the colour directly, but this is not recommended. The
colour is a stringified number (0-360) specifying the hue. Note the British
spelling.

*   {JSON}

    ```js
    {
      "contents": [
        {
          "kind": "category",
          "name": "Logic",
          "colour": "210"
        },
        {
          "kind": "category",
          "name": "Loops",
          "colour": "120"
        }
      ]
    }
    ```

*   {XML}

    ```xml
    <xml id="toolbox" style="display: none">
      <category name="Logic" colour="210">...</category>
      <category name="Loops" colour="120">...</category>
      <category name="Math" colour="230">...</category>
      <category name="Colour" colour="20">...</category>
      <category name="Variables" colour="330" custom="VARIABLE"></category>
      <category name="Functions" colour="290" custom="PROCEDURE"></category>
    </xml>
    ```

Note that we also support using localizable [colour
references](/blockly/guides/configure/web/appearance/colour-formats#colour_references).