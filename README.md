# Solution proposal #Inato

Starting this program will run a new trial routine and store the output's result in "out/output.txt" by default.

## Table of Contents

- [Node version](#node)
- [Install & Start the program](#usage)
- [Linter](#run-linter)
- [Tests](#run-tests-suites)
- [Diff](#check-diff-with-original-output)
- [Prettify](#prettify)

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
