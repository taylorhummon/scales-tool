# Scales Tool

This app is a companion to <emph>Taylor's Guide to Scales</emph>. You can find the guide and this 
app running live at [https://scales.taylorhummon.com/scales-tool](https://scales.taylorhummon.com/scales-tool).

## Installation

This project requires [Node.js](https://nodejs.org) v20.9 or higher. I recommend using 
[nvm](https://github.com/nvm-sh/nvm) to install a recent version of node. Here are its 
[installation instructions](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script).

We'll be using [Yarn](https://yarnpkg.com/) to track dependencies. Yarn is included with node, 
but you may need to [enable it](https://yarnpkg.com/getting-started/install).

To install this application's dependencies, change into the project directory and run `yarn`:
```
cd scales_tool/
yarn
```

## Development server

To start a development server:
```
yarn dev
```

The app will be running at [http://localhost:1234](http://localhost:1234).


### Linting and Checking Types

To lint, run:
```
yarn lint
```

And to execute the type checker, run:
```
yarn check-types
```


### Testing

To execute the front end's test suite, run:
```
yarn test
```


### Building

To build the app and preview the result, run:
```
yarn build &&
yarn preview
```
