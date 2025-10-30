# Customizing your context menus

# 6. Scope

Disabling your context menu options half of the time is not useful, but you may want to show or hide an option based on what the user is doing in the workspace.

To do that you'll need to use the `scope` argument to `preconditionFn`. `scope` is a `Blockly.ContextMenuRegistry.Scope` object. It contains three properties, `workspace`, `block`, and `comment`, but only one is set at any time:

- If your item is registered under the `WORKSPACE` scope type you can access the `workspace` property, which is an instance of `Blockly.WorkspaceSvg`.
- If registered under the `BLOCK` scope type you can access the `block` property, which is an instance of `Blockly.BlockSvg`.
- If registered under the `COMMENT` scope type you can access the `comment` property, which is an instance of `Blockly.RenderedWorkspaceComment`.

## Workspace scope

For example, let's show a **Help** option in the context menu if the user doesn't have any blocks on the workspace. Add this code in `index.js`:

```js
function registerHelpOption() {
  const helpItem = {
    displayText: 'Help! There are no blocks',
    preconditionFn: function(scope) {
      if (!scope.workspace.getTopBlocks().length) {
        return 'enabled';
      }
      return 'hidden';
    },
    callback: function(scope) {
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'help_no_blocks',
    weight: 100,
  };
  Blockly.ContextMenuRegistry.registry.register(helpItem);
}
```

The precondition function accesses `scope.workspace` and uses it to check whether there are any blocks on the workspace.

## Block scope

```js
function registerOutputOption() {
  const outputOption = {
    displayText: 'I have an output connection',
    preconditionFn: function(scope) {
      if (scope.block.outputConnection) {
        return 'enabled';
      }
      return 'hidden';
    },
    callback: function(scope) {
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'block_has_output',
    weight: 100,
  };
  Blockly.ContextMenuRegistry.registry.register(outputOption);
}
```

Don't forget to call `registerHelpOption` and `registerOutputOption` from your `start` function.

## Test it

- Reload your page and right-click on the workspace. You should see an option labeled "Help! There are no blocks".
- Add a block to the workspace and right-click on the workspace again. The **Help** option should be gone.
- Add a block with an output connection. Right-click the block and confirm that there is an option labeled "I have an output connection".
- Add an if block. Right-click the block and confirm that there is no option labeled "I have an output connection".