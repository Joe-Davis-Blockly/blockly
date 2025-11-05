---
description: How to access categories programmatically.
---

# Programmatic access

There are two ways you can access a category programmatically. You can either
access it by index (where 0 is the top category):

```js
var category = toolbox.getToolboxItems()[0];
```

Or by ID:

```js
var category = toolbox.getToolboxItemById('categoryId');
```

Where the ID is specified in the toolbox definition:

*   {JSON}

    ```js
    {
      "kind": "category",
      "name": "...",
      "toolboxitemid": "categoryId"
    }
    ```

*   {XML}

    ```xml
    <category name="..." toolboxitemid="categoryId"></category>
    ```
