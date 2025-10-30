# Customizing your context menus

# 8. Display text

So far the `displayText` has always been a simple string, but it can also be HTML, or a function that returns either of the former. Using a function can be useful when you want a context-dependent message.

When defined as a function `displayText` accepts a `scope` argument, just like `callback` and `preconditionFn`.

As an example, add this context menu option. The display text depends on the block type.

```js
function registerDisplayOption() {
  const displayOption = {
    displayText: function(scope) {
      if (scope.block.type.startsWith('text')) {
        return 'Text block';
      } else if (scope.block.type.startsWith('controls')) {
        return 'Controls block';
      } else {
        return 'Some other block';
      }
    },
    preconditionFn: function(scope) {
      return 'enabled';
    },
    callback: function(scope) {
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'display_text_example',
    weight: 100,
  };
  Blockly.ContextMenuRegistry.registry.register(displayOption);
}
```

As usual, remember to call `registerDisplayOption()` from your `start` function.

## Test it

- Reload the workspace and right-click on various blocks.
- The last context menu option's text should vary based on the block type.