# Next Atomic

## Introduction

**Next Atomic** is a high end app starter kit to quickly create powerful apps based on GraphQL and React

## Why high end ?

Here some features:

-   100% typed (Typescript)
-   Named GraphQL React Hooks (CodeGen)
-   Storybook with Typescript support
-   NextJS 9 with Typescript
-   Stripe GraphQL mocking strategy
-   Cookie auth system for SSR
-   Atomic design architecture
-   Atomic data/operations architecture
-   Concurrently watched processes (Next/Storybook/Mocked Server/CodeGen)
-   Refresh front GraphQL schema via remote url
-   Connectable with any GraphQL API
-   Full React Hooks code style
-   Configured Prettier/Typescript/Eslint
-   Git Pre commit hooks
-   Ready for internationalization
-   Material UI implemented
-   SSR supported
-   GraphQL Server Ready based on Parse Server: https://github.com/Moumouls/next-atomic-gql-server

## Install

Next atomic is super easy to install, just fork/clone/dowload this repo and launch `yarn` to install packages.

> Next Atomic use yarn for security and package versioning features

## Development Workflow

To take full advantage of **Next Atomic** i recommend to use the following development workflow:

-   Define a page to develop
-   Launch storybook: `yarn storybook`
-   Go to the mocked server `http://localhost:1337` or `http://localhost:1338` to check in the playground if data needed for your page exists
-   If some data is not defined in the API check/update your GraphQL Backend/Next Atomic Server and then use/adapt `yarn refresh-schema` to update your local GraphQL API Contract (`./graphql/cloud-schema.graphql`)

## Storybook development (recommended)

To start the story book you need to launch `yarn storybook`
A mocked server with graphql playground is available at `http://localhost:1337/playground` or `http://localhost:1338/playground`
You can find global mocks mocks in `graphql/mock/mocks.ts`

### Create a Story

Along your component you need to create an `stories.tsx`
A simple story can look like this

```ts
import React from 'react'
import { GQLProvider } from '@graphql-mock'
import { Login } from './index'

export default {
	component: Login,
	title: 'Organisms/Login',
}

const email = 'email@email.email'

export const Base = () => (
	<GQLProvider>
		<Login />
	</GQLProvider>
)
```

## Fetch GraphQL Schema from remote

Fetch the schema of the `Next Atomic Server` from `yarn refresh-schema`

## Mocked Server

A mocked server with graphql playground is available at `http://localhost:1337/playground` or `http://localhost:1338/playground`
You can find global mocks mocks in `graphql/mock/mocks.ts`

### Full app dev

Launch `yarn dev`
A mocked server with graphql playground is available at `http://localhost:1337/playground` or `http://localhost:1338/playground`
You can find global mocks mocks in `graphql/mock/mocks.ts`
