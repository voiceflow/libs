# api-sdk

[![circle ci](https://circleci.com/gh/voiceflow/api-sdk/tree/master.svg?style=shield&circle-token=4cca5aee2fe1ed3f55217da5c004db623a949d9e)](https://circleci.com/gh/voiceflow/api-sdk/tree/master)
[![codecov](https://codecov.io/gh/voiceflow/api-sdk/branch/master/graph/badge.svg?token=I7UDBF71DB)](https://codecov.io/gh/voiceflow/api-sdk)
[![sonar quality gate](https://sonarcloud.io/api/project_badges/measure?project=voiceflow_api-sdk&metric=alert_status)](https://sonarcloud.io/dashboard?id=voiceflow_api-sdk)

SDK for Voiceflow API, with typings for general voiceflow data structures.

## Getting Started

### Environment

In order to run this package locally, make sure you have `yarn` and `brew` installed.
You also need to acquire a `.env` file and a `local_sercrets.yaml` file from engineering to load development secrets.

### Package Manager

This Repository Relies on `yarn` and does not work with `npm`

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
