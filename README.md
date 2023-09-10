<a href="https://github.com">
  <img alt="Monorepo support for Fireblocks Demo." src="/fireblocks-hero.png">
</a>

# Fireblocks NCW Monorepo starter

Note: Currently only runs locally. Frontend is deployed for demonstration purposes only. Run locally and set .env variables with the current .env example variables.

This is an demo project for the Permissionless Hackathon to demonstrate how to integrate Fireblocks' Non-Custodial Wallets SDK with the latest Turborepo build system.

## What is Turborepo?

Turborepo is a build system for monorepos. It is designed to be fast, flexible, and easy to use. It is built on top of [ESBuild](https://esbuild.github.io/), [Vercel](https://vercel.com/), and [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

## Why Turborepo?

Turborepo can tremendously improve the development experience for Web3 builders. By managing, building, and inteligently caching your Web3 apps in a monorepo, Turborepo can save you time and money.

For complex applications and full stack applications like the Fireblocks NCW, Turborepo can be a game changer. It can help you manage your entire stack in a single repository, and it can help you build and deploy your entire stack in a single command.

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

(Note - The frontend is deployed, but the repo needs to be run locally to operate the whole app. The backend still needs to be converted to support the monorepo build system).

Video Demo - <video src='/fireblocks-monorepo-demo.mp4' width=180/>
