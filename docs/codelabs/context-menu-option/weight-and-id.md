# Customizing your context menus

# 9. Weight and id

The last two properties of a registry item are `weight` and `id`.

## Weight

The `weight` property is a number that determines the order of the items in the context menu. A higher number means your option will be lower in the list.

Test this by updating the `weight` property on one of your new context menu options and confirming that the item moves to the top or bottom of the list.

Note that weight does not have to be positive or integer-valued.

## Id
Every registry item has an `id` that can be used to unregister it. You can use this to get rid of context menu options that you don't want.

For instance, you can remove the option that deletes all blocks on the workspace:

```js
Blockly.ContextMenuRegistry.registry.unregister('workspaceDelete');
```

## Default options
For a list of the default options that Blockly provides, look at [contextmenu_items.ts](https://github.com/google/blockly/blob/master/core/contextmenu_items.ts). Each entry contains both the `id` and the `weight`.