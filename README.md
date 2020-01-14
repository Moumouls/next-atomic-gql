# Next Atomic

## Install

Just `yarn`

## Storybook

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
