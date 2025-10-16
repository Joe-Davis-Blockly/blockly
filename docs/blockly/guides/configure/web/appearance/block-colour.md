Project: /blockly/_project.yaml
Book: /blockly/_book.yaml
description: How to apply colours to a block.

# Block colours

Most Blockly apps use a variety of block colours to visually group the blocks
into categories. The blocks shipped with Blockly include several categories,
with the colours mirrored by the various toolbar categories in the demos:

![A screenshot of a workspace with an example of each block
colour.](/blockly/images/standard-block-colors.png)

Additional colours on the block are derived from the main colour. For example,
[shadow blocks](/blockly/guides/configure/web/toolboxes/preset#shadow_blocks)
are a desaturated version of the main colour, and border colours are a darker
version.

Tip: If you want more control over shadow block or border colours, learn about
[defining a theme](/blockly/guides/configure/web/appearance/themes).

## Set block colour

The primary colour of a block can be defined in either JSON or JavaScript. You
can pass the hue (preferred), RGB value, or color name; for more information,
see [Colour formats](/blockly/guides/configure/web/appearance/colour-formats).

*   {JSON}

    ```js
    {
      // ...,
      "colour": 160,
    }
    ```

*   {JavaScript}

    ```js
    init: function() {
      // ...
      this.setColour(160);
    }
    ```

Note the British spelling. Failure to set the colour results in a black block.

You can also set the block color using the
[`Block.setColour(..)`](/blockly/reference/js/blockly.block_class.setcolour_1_method)
function, or by using [themes](/blockly/guides/configure/web/appearance/themes)
and defining a block style.

## Accessibility

For information about how colour affects accessibility, see [Colour and
accessibility](/blockly/guides/configure/web/colour-a11y)