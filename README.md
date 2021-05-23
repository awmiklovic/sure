# Sure Frontend Technical Challenge

This is my solution for the Sure Frontend Technical Challenge.

[Live Demo](https://zen-curran-b9f88d.netlify.app/).

The project was bootstrapped with `Create React App` and I'm using `@emotion/styled` for CSS.

Please note - I also wrote some unit tests as well in `app.test.tsx`.

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
