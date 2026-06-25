# Visual Music Tools

The Visual Music Tool allows you to visually explore patterns among musical scales, modes, 
and triads. You can try it out at [https://taylorhummon.com/](https://taylorhummon.com/).


## Installation

This project requires [Node.js](https://nodejs.org) v20.9 or higher. I recommend using 
[nvm](https://github.com/nvm-sh/nvm) to install a recent version of node. Here are its 
[installation instructions](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script).

We're using [pnpm](https://pnpm.io/) to track dependencies. If you don't already have it, 
follow its [installation instructions](https://pnpm.io/installation).

To install this application's dependencies, change into the project directory and run `pnpm`:
```
cd visual_music_tools/
pnpm
```


## Development server

To start a development server:
```
pnpm dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).


### Linting and Checking Types

To lint, run:
```
pnpm lint
```

And to execute the type checker, run:
```
pnpm check-types
```


### Testing

To execute the test suite, run:
```
pnpm test
```


### Building

To build the app:
```
pnpm build
```
The resulting static app can be found in the `dist/` directory.
