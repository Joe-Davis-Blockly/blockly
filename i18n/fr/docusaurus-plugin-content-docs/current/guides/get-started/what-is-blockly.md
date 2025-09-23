---
sidebar_label: What is Blockly?
sidebar_position: 1
sidebar: guidesSidebar
---

# Qu'est-ce que Blockly ?

Blockly est une bibliothèque Web qui vous permet d'ajouter un éditeur de code personnalisable basé sur des blocs à votre application. L'éditeur utilise des blocs ressemblant à des pièces de puzzle pour représenter des concepts de code tels que des variables, des expressions logiques, des boucles, etc. Il permet aux utilisateurs de programmer sans avoir à se soucier de la syntaxe ni de l'intimidation de la ligne de commande.

:::note
Blockly is for developers, Blockly apps are for learners. If you're here
to use apps rather than build them, try some of the products from [companies
that create Blockly apps][blockly-apps].
:::


Breaking it down further, you can think of Blockly in two ways:

1.  Like a fun puzzle-piece UI.
2.  Like a fancy string builder.

You define the puzzle connections and input fields, and then Blockly handles the
complicated rendering, dragging, and connecting of them.

You define the string (usually code) that gets generated for each block, and
then Blockly handles concatenating whole strings of blocks. What you do with
that result is up to you. You can do anything from solving a maze, to animating
a character, to analyzing some data. For more examples, see the [Introduction to
Blockly applications](/blockly/guides/design/app-overview).

Blockly lets you focus on applying blocks to your domain without worrying about
the details of how blocks work. For more information see
[Why Blockly?][why-blockly]

[blockly-apps]: https://developers.google.com/blockly#learn-with-blockly
[why-blockly]: /blockly/guides/get-started/why-blockly.md
