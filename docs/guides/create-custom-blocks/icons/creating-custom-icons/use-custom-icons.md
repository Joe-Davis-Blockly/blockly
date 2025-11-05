---
description: How to use custom icons.
---

# Use custom icons

To use a custom icon, call `addIcon` or `getIcon` on a block.

## Add an icon

To add a custom icon to a block, pass the block to the icon's constructor and
call `addIcon` on the block. For example, you might want to do this when
initializing the block or in response to an event.

*   {JSON}

    ```js
    // Use an extension to add a custom icon during initialization.
    Blockly.Extensions.register("addMyIcon", function () {
      this.addIcon(new MyIcon(this));
    })

    Blockly.common.defineBlocksWithJsonArray([
      {
        type: "my_block",
        // ...
        extensions: ["addMyIcon"],
      },
    ])
    ```

*   {JavaScript}

    ```js
    // Add a custom icon during initialization.
    Blockly.Blocks['my_block'] = {
      init: function() {
        //...
        this.addIcon(new MyIcon(this));
      },
    }
    ```

## Get an icon

To get a custom icon from a block, call `getIcon` and pass the [icon's type
string](/blockly/guides/create-custom-blocks/icons/creating-custom-icons/basic-implementation#specify_the_icons_type).

```js
const myIcon = myBlock.getIcon('my_icon');
```
