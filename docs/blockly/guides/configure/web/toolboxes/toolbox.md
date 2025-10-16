Project: /blockly/_project.yaml
Book: /blockly/_book.yaml
description: Defining the toolbox, which allows users to access your blocks.

# Toolboxes

The toolbox is the place where users get blocks. Usually it is displayed on one
side of the workspace.

A [flyout toolbox](/blockly/guides/configure/web/toolboxes/flyout) has a single
set of blocks that are displayed at all times. A [category
toolbox](/blockly/guides/configure/web/toolboxes/category) has multiple sets of
blocks that are arranged into different categories.

Toolboxes can be defined using JSON (as of the [September 2020
release](https://github.com/google/blockly/releases/tag/3.20200924.0)) or XML.
The JSON format is preferred.

This section mainly focuses on how to specify the *structure* of your toolbox
(i.e. what categories it has, and what blocks they contain). If you want more
details about how to change the *appearance* of your toolbox, see [Category
appearance](/blockly/guides/configure/web/toolboxes/appearance), the
[Customizing a Blockly toolbox
codelab](https://blocklycodelabs.dev/codelabs/custom-toolbox/index.html?index=..%2F..index#0),
and the [2021 Toolbox APIs
talk](https://www.youtube.com/watch?v=JJVX_YuKDbo&list=PLSIUOFhnxEiCjoIwJ0jAdwpTZET73CK7d&index=9&t=1s).