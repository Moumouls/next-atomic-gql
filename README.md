# Next Atomic

## Install

Just `yarn`

## Storybook

To start the story book you need to launch `yarn storybook`

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

To design requests you can start a mocked server with playground: `yarn refresh-schema`

## Mocked Server

To design requests you can start a mocked server with playground: `yarn mocked-server`

You can find global mocks mocks in `graphql/mock/mocks.ts`

## Start Next

### Full app dev

First you need to start the mocked server: `yarn mocked-server` and in another shell window `yarn dev`
