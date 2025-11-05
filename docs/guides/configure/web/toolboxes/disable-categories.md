---
description: How to disable, hide, or expand categories in a category toolbox.
---

# Disable, hide, or expand categories

You can disable, hide, or expand categories.

## Disable categories

A disabled category will not allow a user to open the category and it will be
skipped during keyboard navigation.

```js
var category = toolbox.getToolboxItems()[0];
category.setDisabled('true');
```

When a category is disabled, a `'disabled'` property is added to the DOM
element, which allows you to control the look of a disabled category.

```css
.blocklyToolboxCategoryContainer[disabled="true"] {
  opacity: .5;
}
```

## Hide categories

A hidden category will not be shown as part of the toolbox.

*   {JSON}

    ```js
    {
      "kind": "category",
      "name": "...",
      "hidden": "true",
    }
    ```

*   {XML}

    ```xml
    <category name="..." hidden="true"></category>
    ```

Hidden categories can later be shown via JavaScript.

```js
var category = toolbox.getToolboxItems()[0];
category.hide();
// etc...
category.show();
```

## Expand categories

This only applies to categories which contain other [nested
categories](/blockly/guides/configure/web/toolboxes/nested).

An expanded category will show you its sub categories. By default, nested
categories are collapsed, and need to be clicked to be expanded.

*   {JSON}

    ```js
    {
      "kind": "category",
      "name": "...",
      "expanded": "true",
    }
    ```

*   {XML}

    ```xml
    <category name="..." expanded="true"></category>
    ```
