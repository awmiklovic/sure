# Sure Frontend Technical Challenge

This is my solution for the Sure Frontend Technical Challenge. [Live Demo](https://zen-curran-b9f88d.netlify.app/).

## `Running Locally`

```
git clone https://github.com/awmiklovic/sure.git
npm ci
npm start
```

## `Testing and Linting`

```
npm lint
npm test
```

or 

`make ready`

To ensure that all merges into `main` branch pass testing and linting, run:

`make hook`

This will set up a prepush script that automatically runs:

```
npm lint
npm test
```

## `Deployment`

This repository is connected to a CI/CD pipeline in Netlify. Updates to main will deploy a new build.

## `Roadmap`

Given additional time, I would like to
- Add more robust error handling to ApiHandler
- Auto convert snake_case to camelcase in ApiHandler
- Add custom Select component
