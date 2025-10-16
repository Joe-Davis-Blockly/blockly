Project: /blockly/_project.yaml
Book: /blockly/_book.yaml
description: How to define a destroy hook.

# Destroy hook

Blocks have a `destroy` hook, which is called when they are deleted from the
workspace. This can be used to destroy any backing data models or external
resources associated with the block that are no longer needed.

*   {JSON}

    ```js
    {
      // ...,
      "extensions":["destroy"],
    }

    Blockly.Extensions.registerMixin('destroy', {
      destroy: function() {
        this.myResource.dispose();
      }
    });
    ```

    In JSON, define a `destroy` hook with a
    [mixin](/blockly/guides/create-custom-blocks/define/extensions#mixins).

*   {JavaScript}

    ```js
    Blockly.Blocks['block_type'] = {
      destroy: function() {
        this.myResource.dispose();
      }
    }
    ```

The `destroy` method is called after the block's parent has been disposed, but
before any of its children or fields have been disposed.