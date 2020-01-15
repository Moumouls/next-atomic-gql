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
-   Snackbar Provider
-   GraphQL Server Ready based on Parse Server: [https://github.com/Moumouls/next-atomic-gql-server](https://github.com/Moumouls/next-atomic-gql-server)

## Install

Next atomic is super easy to install, just fork/clone/dowload this repo and launch `yarn` to install packages.

> Next Atomic use yarn for security and package versioning features

## Main Strategy

The main goal of **Next Atomic** is to isolate as much as possible each component, and associate a `GraphQL Fragment` to each component then the N+1 component can use children's `GraphQL Fragment` inside it's own `index.graphql`. With this strategy you can easly design and create components without carrying about data availability. This is a Data Driven UI.

## Development Workflow

To take full advantage of **Next Atomic** i recommend to use the following development workflow:

-   Define a page to develop
-   Launch storybook: `yarn storybook`
-   Go to the mocked server `http://localhost:1337` or `http://localhost:1338` to check in the playground if data needed for your page exists
-   If some data is not defined in the API check/update your GraphQL Backend/Next Atomic Server and then use/adapt `yarn refresh-schema` to update your local GraphQL API Contract (`./graphql/cloud-schema.graphql`)
-   Create Atoms:
    -   index.tsx
    -   stories.tsx
    -   index.graphql (if needed)
-   Create Molecules:
    -   index.tsx
    -   stories.tsx
    -   index.graphql (if needed)
-   Create Organisms:
    -   index.tsx
    -   stories.tsx
    -   index.graphql (if needed)
-   Create Template:
    -   index.tsx
    -   stories.tsx
    -   index.graphql (if needed)
-   Create Next Page
-   Test your app with `yarn dev`

## Storybook development (to develop)

To start the story book you need to launch `yarn storybook`
A mocked server with graphql playground is available at `http://localhost:1337/playground` or `http://localhost:1338/playground`
You can find global mocks mocks in `graphql/mock/mocks.ts`

## Next development (to test app, fix last bugs)

Start the next dev app with `yarn dev`, the next app will try to connect to the GraphQL server at `http://localhost:1337/playground`. A mocked server with graphql playground is available at `http://localhost:1337/playground` or `http://localhost:1338/playground`
You can test your app with a true GraphQL Server by starting the **Next Atomic GraphQL Server**: [https://github.com/Moumouls/next-atomic-gql-server](https://github.com/Moumouls/next-atomic-gql-server)

## Fetch GraphQL Schema from remote

Fetch the schema of the `Next Atomic Server` or other GraphQL Server from `yarn refresh-schema`

## Stories

### Without data or props

Here a quick example of the logout atom

```tsx
// stories.tsx
import React from 'react'
import { LogOutButton } from './index'

export default {
	component: LogOutButton,
	title: 'Atoms/LogOutButton',
}

export const Base = () => <LogOutButton />
```

### With data using GQLProvider

Here a quick example of the viewer chip molecule

```tsx
// stories.tsx
import React from 'react'
import {
	GQLLoadingProvider,
	GQLProvider,
	GQLErrorProvider,
} from '@graphql-mock'
import { ViewerChip } from './index'

export default {
	component: ViewerChip,
	title: 'Molecules/ViewerChip',
}

// A default GQLProvider wrapper exist on each story
export const Base = () => <ViewerChip />

// Every graphql request will stay into a loading state
export const Loading = () => (
	<GQLLoadingProvider>
		<ViewerChip />
	</GQLLoadingProvider>
)

// Every graphql request will raise an error
export const NoViewer = () => (
	<GQLErrorProvider>
		<ViewerChip />
	</GQLErrorProvider>
)

// Here we define a special GraphQL mock resolver
// to complete the use case
const customResolvers = {
	User: () => ({
		picture: null,
	}),
}

export const WithoutPicture = () => (
	<GQLProvider customResolvers={customResolvers}>
		<ViewerChip />
	</GQLProvider>
)
```

### With fine grained GraphQL error/response

Here a quick example of the personal informations molecule that display a form

```tsx
// stories.tsx
import React from 'react'
import { GQLProvider } from '@graphql-mock'
import { PersonalInformations } from './index'

export default {
	component: PersonalInformations,
	title: 'Molecules/PersonalInformations',
}

const customResolvers = {
	Mutation: () => ({
		updateUser: () => {
			// eslint-disable-next-line
			throw 'error'
		},
	}),
}

export const Base = () => <PersonalInformations />
export const Error = () => (
	<GQLProvider customResolvers={customResolvers}>
		<PersonalInformations />
	</GQLProvider>
)
```

## GraphQL Codegen

**GraphQL Codegen** watch and compile each file in `./components` folder that's end with `.graphql`
Each GraphQL stuff (`Mutation`,`Query`,`Fragment`, etc...) that you define inside `.graphql` files will be transformed into **Typescript** and merged into a special module `@graphql`.

For example:

```graphql
# index.graphql
query viewer {
	viewer {
		user {
			...Viewer
		}
	}
}
fragment Viewer on User {
	id
	firstname
	lastname
}
```

Will generate a `useViewerQuery` typed GraphQL apollo hook and a `ViewerFragment` type; then you can import generated query/mutation/type like:

```tsx
import { useViewerQuery } from '@graphql'
```
