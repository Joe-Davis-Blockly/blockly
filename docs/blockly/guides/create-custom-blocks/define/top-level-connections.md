Project: /blockly/_project.yaml
Book: /blockly/_book.yaml
description: How to define next, previous, and output connections.

# Top-level connections

Blocks have three connections whose use is optional.

## Statement Connections

Users can create sequences of blocks using the `nextStatement` and
`previousStatement` connectors.  In Blockly's standard layout, these connections
are on the top and the bottom, with the blocks stacked vertically.

A block with a previous connector cannot have an [output
connector](#output_connection). The term *statement block* refers
to a block with no output connector. A statement block will usually have both
a previous connection and a next connection.

`nextStatement` and `previousStatement` connections can be
[typed](/blockly/guides/create-custom-blocks/type-checks),
but this feature is not utilized by standard blocks.

### Next Connection

Creates a point at the bottom of the block, so that other statements can be
stacked below it.  A block with a next connection but no previous connection
usually represents an event, and can be configured to render with
[a hat](/blockly/guides/design/applications#event_driven_program).

![A block with no fields and a tab on the
bottom.](/blockly/images/set-next-statement.png)

*   {JSON}

    Untyped:

    ```js
    {
      ...,
      "nextStatement": null,
    }
    ```

    Typed (*rare*):

    ```js
    {
      "nextStatement": "Action",
      ...
    }
    ```

*   {JavaScript}

    Untyped:

    ```js
    this.setNextStatement(true);  // false implies no next connector, the default
    ```

    Typed (rare):

    ```js
    this.setNextStatement(true, 'Action');
    ```

### Previous Connection

Creates a notch at the top of the block, so that it can be connected as a stack
of statements.

Blocks with a previous connection cannot have an output connection.

![A block with no fields and a notch on the
top.](/blockly/images/set-previous-statement.png)

*   {JSON}

    Untyped:

    ```js
    {
      ...,
      "previousStatement": null,
    }
    ```

    Typed (*rare*):

    ```js
    {
      "previousStatement": "Action",
      ...
    }
    ```

*   {JavaScript}

    Untyped:

    ```js
    this.setPreviousStatement(true);  // false implies no previous connector, the default
    ```

    Typed (rare):

    ```js
    this.setPreviousStatement(true, 'Action');
    ```

## Output connection

A block may have a single output connection, represented as a male jigsaw
connector on the leading edge. Outputs connect to value inputs. Blocks with an
output are usually called *value blocks*.

![A block with no fields and a male puzzle connector on the left
edge.](/blockly/images/set-output.png)

*   {JSON}

    Untyped:

    ```js
    {
      // ...,
      "output": null,
    }
    ```

    Typed:

    ```js
    {
      // ...,
      "output": "Number",
    }
    ```

*   {JavaScript}

    Untyped:

    ```js
    init: function() {
      // ...
      this.setOutput(true);
    }
    ```

    Typed:

    ```js
    init: function() {
      // ...
      this.setOutput(true, 'Number');
    }
    ```

Blocks with an output connector cannot also have a previous statement notch.