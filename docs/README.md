# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Getting Started

Clone the Blockly POC Github repository on the local machine

```bash
git clone --single-branch --branch cybage-blockly https://github.com/Joe-Davis-Blockly/blockly.git
```

# What you'll need

Node.js version 20.0 or above

## Installation

```bash
cd blockly/docs
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Test your production build locally

```bash
npm run serve
```

The  build folder is now served at http://localhost:3000/.

## Push your code changes on remote branch

Take the latest commits from the remote Github branch.
```bash
git pull origin cybage-blockly
```

Make your code changes in your local branch.
```bash
git add .
git commit -m <commit message>
git push -u origin cybage-blockly
```


## Deployment

Changes are automatically deployed on Github pages, as CI/CD has been implemented using Github Actions. The changes will be visible on this URL,
https://joe-davis-blockly.github.io/blockly/

