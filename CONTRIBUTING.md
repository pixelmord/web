# Contributing to Zoonk

Zoonk encourages a diverse, inclusive community. Before contributing to Zoonk, make sure you read our [Code of Conduct](./CODE_OF_CONDUCT.md).

There are a few ways you can contribute to Zoonk:

## Reporting bugs

Did you find something that's not working properly? Then, [open a bug report](https://github.com/zoonk/web/issues/new?labels=bug&template=bug_report.md).

## Suggesting new features

Would you like to see a new feature available on Zoonk? Then, [open a feature request](https://github.com/zoonk/web/issues/new?labels=enhancement&template=feature_request.md).

## Starting a conversation

Do you have any ideas about the project you would like to discuss? Then, [open an issue](https://github.com/zoonk/web/issues/new) to discuss it.

## Contributing to other areas

You can also contribute to other areas of Zoonk:

- [Culture](https://github.com/zoonk/culture): Culture, challenges, goals, plans, and processes
- [Design](https://github.com/zoonk/design): UI/UX design, visual identity, and design resources
- [Content](https://github.com/zoonk/content): Content creation
- [Communication](https://github.com/zoonk/communication): Communication guidelines and planning
- [Finances](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YEPTU8BZ2QWHE&source=url): Donate to the project

## Writing code

[Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account. Then, [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.

### Setting up Firebase

We're using [Firebase](https://firebase.google.com) for our backend (authentication, database, storage, analytics). Before you get started, you'll need to [create a Firebase project](https://firebase.google.com/docs/web/setup).

After you do so, Firebase will give you a [config object](https://firebase.google.com/docs/web/setup#config-object). You'll need to add those values to your environment variables. You can create an `.env` file on the app's root directory. You need to pass the following environment variables:

```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DB_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_ID=
FIREBASE_APP_ID=
FIREBASE_MEASUREMENT_ID=
```

You'll also need to update the `.firebaserc` file to match the project ID you've created. Edit that file to have the following:

```json
{
  "projects": {
    "default": "your-firebase-app-id"
  }
}
```

Replace `your-firebase-app-id` with the `projectId` value you got from your config object.

### Setting up Algolia

We're using [Algolia](https://www.algolia.com/) for our search. Before you get started, you'll need to [create a free Algolia account](https://www.algolia.com/users/sign_up). They'll guide you on creating your first project. After you do so, you'll need to add Algolia's API keys to your environment variables (the `.env` you've created in the previous step).

You need to create two environment variables:

```
ALGOLIA_APP_ID=
ALGOLIA_SEARCH_KEY=
```

You can get them from the Algolia dashboard:

1. Select your test project
1. Go to "API Keys"
1. Copy the value from "Application ID" and "Search-Only API Key" and paste them on the environment variables you've created above

### Other environment variables

You can also use the following environment variables on your `.env` file:

| Name        | Type       | Default   |
| ----------- | ---------- | --------- |
| `APP_LANG`  | `en`, `pt` | `en`      |
| `BUILD_ENV` | `string`   | `staging` |

### Installing Zoonk locally

1. Create a new branch `git checkout -b MY_BRANCH_NAME`
1. Install yarn: `npm install -g yarn`
1. Install the dependencies: `yarn install:deps`
1. Deploy Firebase: `yarn`
1. Run `yarn dev` to build and watch for code changes

### Running tests

- Run `yarn test:watch` to run tests and watch for file changes
- Run `yarn test` to run tests only once
- Run `yarn test:coverage` to get the test coverage

### Linting

- Run `yarn lint` for linting all files

### Type-checking

- Run `yarn tsc` for type-checking all files
- Run `yarn tsc:app` for type-checking the frontend only
- Run `yarn tsc:functions` for type-checking the backend only