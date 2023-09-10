<a href="https://github.com">
  <img alt="Monorepo support for Fireblocks Demo." src="https://github.com/headline-design/fireblocks-monorepo/blob/main/fireblocks-hero.png">
  <h1 align="center">Fireblocks NCW Monorepo</h1>
</a>

# Fireblocks NCW Monorepo starter

This is an demo project for the Permissionless Hackathon to demonstrate how to integrate Fireblocks' Non-Custodial Wallets SDK with the latest Turborepo build system.

## Using this Fireblocks MonoRepo

Run the following commands:

```sh
yarn install
yarn dev
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `frontend`: A React.Js app for interacting with the Fireblocks SDK
- `backend`: A Node.Js backend for interacting with the Fireblocks SDK
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

The frontend is deployed at [https://fireblocks-monorepo-frontend.vercel.app](https://fireblocks-monorepo-frontend.vercel.app).

The backend is under development. To run the backend locally, run the following commands:

```sh
cd backend
yarn install
yarn dev
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
