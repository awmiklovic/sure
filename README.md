# Sure Frontend Technical Challenge

This is my solution for the Sure Frontend Technical Challenge.

[Live Demo](https://zen-curran-b9f88d.netlify.app/).

This project was setup with `Create React App` using the `typescript` template, and `@emotion/styled` for component styling.

Please note - there are some unit tests in `app.test.tsx`.

## Running Locally

```
git clone https://github.com/awmiklovic/sure.git
cd sure
npm ci
npm start
```

## Testing and Linting

```
npm run lint
npm run test
```

or 

`make ready`

To ensure that all merges into `main` branch pass testing and linting, run:

`make hook`

This will set up a prepush script that automatically runs:

```
npm run lint
npm run test
```

## Deployment

This repository is connected to a CI/CD pipeline in Netlify. Updates to main will deploy a new build.

## Roadmap

Given additional time, I would like to
- Add more robust error handling to `ApiHandler.ts`
- Auto convert snake_case to camelCase in `ApiHandler.ts`
- Add custom `<Select />` component
