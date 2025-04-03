# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## Environment setup

First, run the development server:

```bash
yarn instll
```

```bash
yarn dev
```

## Approache

1. I used context and usereducer to manage global state, reason been that the project too small to use a 3rd part state management library
2. I Oraginized the app based on functionality. Each folder within the src folder been named in accordance with its purpose
3. I used Vite, since React discourage the continuous use of create react app library, ad encourages the use of SSR libraries. I used Vite and not Next, because the project didnt mention Nextjs but says React.
