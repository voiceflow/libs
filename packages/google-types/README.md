# backend-template

Backend application template 

## Getting Started

### Modify `package.json`
The first thing you should do after initializing a new backend project with this repository is to modify the `package.json` to meet your project needs. 
Specifically, ensure that: 
- `name` is set to `@voiceflow/YOUR_PKG_NAME`
- All Github URLs referencing `backend-template` should be modified to point to your project's repository URL

### Setting up CircleCI for automated testing
The default CI template is sufficient to get you started with automated tests:
1. Modify the `.circleci/config.yml` file with the proper package name for the `npm-repo` (this should correspond to your `name` in `package.json`).
2. Inspect the `jobs.test` stanza of the CircleCI config to modify database setup and additional steps for tests. Don't forget to commit your changes
3. Click "Set up project" in the [CircleCI Projects view](https://app.circleci.com/projects/project-dashboard/github/voiceflow/).
4. Select "Use existing config" and click "start building". 
At this point, your project should be set up to automatically run tests on pushes. Please speak to [Frank Gu](frank@voiceflow.com) if you wish to set up the component for dev environments and deployment. 

### Environment

In order to run this package locally, make sure you have `yarn` and `brew` installed.
You also need to acquire a `.env` file and a `local_sercrets.yaml` file from engineering to load development secrets.

### Package Manager

This Repository Relies on `yarn` and does not work with `npm`. This package is currently set to release on `master` and will not publish to NPM.
If you wish to change this behavior, refer to `.releaserc`.

### Install Dependencies

Use `yarn` to install this project's dependencies.

```sh
yarn install
```

### Generate SSL Certificates

Use `mkcert` to generate and install SSL certificates for local development.

```sh
yarn gen-certs
```

## Usage

### Build

Run `tsc` to generate a compiled version of the server.

```sh
yarn build
```

### Start

Run the `express` server locally.

```sh
yarn local
```

### Testing

#### Linting

Test the code for linting errors with `estlint`.

```sh
yarn lint
```

#### Unit Tests

Run unit tests with `mocha`.

```sh
yarn test
```