# Junior Technical Assesment

This is a basic technical test for potential Kore developers.

This has been designed to provide an insight into the type of projects you'll be working on day to day.
Nothing in here has been done to deliberately catch you out.

This repo contains a basic Angular app with some components and tests mirroring a fairly typical setup.

For simplicity authentication, authorisation and apis have been excluded.
There is a service class which is emulating api like responses.

Before doing anything you will need to clone this repo and install the dependancies using `pnpm`.

We then have some simple tasks we'd like you to attempt, these are shown within the code using `@fixme`.

1. Refactor the product card out of the main app component into it's own (with tests)
1. Ensure errors during create/update of a product are shown to the user
1. Provide meaningful feedback to the user depending on the validation error
1. Ensure form data is not lost if errors occur
1. Complete the missing tests

## Development server

To start a local development server, run:

```bash
pnpm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
pnpm ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
pnpm ng generate --help
```

## Running unit tests

```bash
pnpm test
```

## Approach

1. I try to understand the requirements and familiarise myself with the codebase.
1. I did some spike on how angular works since my background is React. The transition was smooth since I'm familiar with html, typescript and some language which use templating language is similar to angular.
1. I followed the steps by steps on the README.md file.
1. I refactor the product card out of the main app component into its own component.
    - I use the Angular CLI to generate a new component called product-card.
    - I move the product card code from the app component to the product card component.
    - I update the app component to use the product card component.
    - I added tests for the product card component.
1. I ensure errors during create/update of a product are shown to the user.
    - I show the error given by the update and create product service.
1. I provide meaningful feedback to the user depending on the validation error.
1. I ensure form data is not lost if errors occur.
    - I avoid resetting the form if there is an error and only reset the form if the product is successfully created or updated.
1. I complete the missing tests.
