# Getting started with Blockly

# 2. Setup

## Download the sample code

You can get the sample code for this code by either downloading the zip here:

[Download zip](https://github.com/google/blockly-samples/archive/master.zip)

or by cloning this git repo:

```bash
git clone https://github.com/google/blockly-samples.git
```

If you downloaded the source as a zip, unpacking it should give you a root folder named `blockly-samples-master`.

The relevant files are in `examples/getting-started-codelab`. There are two versions of the app:
- `starter-code/`: The starter code that you'll build upon in this codelab.
- `complete-code/`: The code after completing the codelab, in case you get lost or want to compare to your version.

Each folder contains:
- `scripts/`
  - `main.js` - The main logic for the app. In the starter project it has all the code needed to navigate and switch between views in the basic app.
  - `music_maker.js` - A small library to play sounds. We will use it to actually play sounds in the browser.
- `sounds/` - Sound files for various notes
- `styles/` - The app's CSS
- `index.html` - The app's index page.
