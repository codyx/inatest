# Solution proposal #Inato

Starting this program will run a new trial routine and store the output's result in "out/output.txt" by default.

## Table of Contents

- [Node version](#node)
- [Install & Start the program](#usage)
- [Linter](#run-linter)
- [Tests](#run-tests-suites)
- [Prettify](#prettify)
- [Customize](#custom-dose)
- [Data visualisation](#dataviz)
- [Dotenv](#dotenv)

## Node ![nvm version](https://img.shields.io/badge/version-v10.15.3-green.svg)

Ensure node.js version is >= at the one defined in .nvmrc

If using nvm, you can simply do this:

```sh
nvm use
```

## Usage

```sh
npm install
npm start
```

## Run linter
```sh
npm run lint
```

## Run tests suites
```sh
npm test
```

## Prettify

Enable prettify (will generate a pseudo-json file in the "out" folder to trigger syntax highlighting).

```sh
echo "PRETTIFY=true" > .env
```

## Custom dose

Enable Prettify (see above) and edit "src/index.js":

```js
import dose from "../doses/original"; // Replace by whatever dose file you want.
```
Then run

```sh
npm start
```

## Dataviz

You can render different drug doses.

Feel free to pick one from the "doses" folder or use your own. (If you lack inspiration, try the "random" file). 

See [customize](#custom-dose) for more details.

**Note**: a valid JSON file **MUST** exist in "out/output.json" before running the React app.

```sh
cd dataviz
npm install
npm run dev
```

Then open http://localhost:3000 from your favourite browser.

## Dotenv

You can use a .env file at the root of the project.

Values below are defaults.

```sh
NODE_ENV=development
PRETTIFY=false
TRIAL_DURATION=30
```
