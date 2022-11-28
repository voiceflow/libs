# fetch

Voiceflow fetch wrapper and error handling for SDKs

## Installation

```sh
yarn add --exact @voiceflow/fetch @voiceflow/exception

# if using for Node.JS
yarn add --exact undici
```

## Usage

This is a universal library and can be used in the browser or in a Node.JS environment by passing a `fetch` implementation.

### Browser Usage

```ts
import { FetchClient } from '@voiceflow/fetch';

const fetch = new FetchClient();
```

### Node Usage

```ts
import { FetchClient } from '@voiceflow/fetch';
import * as undici from 'undici';

const fetch = new FetchClient(undici.fetch);
```

## Features

- [JSON requests](#json-requests)
- [JSON responses](#json-responses)
- [HTTP methods](#http-methods)
- [throws on non-2xx](#throws-on-non-2xx)
- [@voiceflow/exception integration](#voiceflowexception-integration)
- [raw request passthrough](#raw-request-passthrough)

### JSON Requests

Use the `json` option to pass a payload that will be serialized with `JSON.stringify`.
This will also automatically add the request header `Content-Type: application/json`.

```ts
const fetch = new FetchClient();

await fetch.put('http://example.com', {
  json: { foo: 'bar' }
});
```

### JSON Responses

Use the `json()` method attached to the returned promise to resolve a parsed version of the response payload without needing an additional `await`.
You can also specify a type for the parsed result, by default the type will be `unknown`.

```ts
const fetch = new FetchClient();

const result = await fetch.get('http://example.com').json<{ id: number, name: string }>();
```

### HTTP Methods

Use the appropriate method to set the HTTP method being used in the request.

```ts
const fetch = new FetchClient();

fetch.delete('/foo'); // DELETE /foo
fetch.get('/foo');    // GET    /foo
fetch.head('/foo');   // HEAD   /foo
fetch.patch('/foo');  // PATCH  /foo
fetch.post('/foo');   // POST   /foo
fetch.put('/foo');    // PUT    /foo
```

### Throws on non-2xx

If any non-`2xx` HTTP status is returned then a `ClientException` from `@voiceflow/exception` is thrown.

```ts
const fetch = new FetchClient();

try {
  await fetch.get('http://example.com'); // return 404
} catch (err) {
  err; // ClientException
}
```

### `@voiceflow/exception` Integration

Internal error codes and other error details are automatically extracted from the response payload when a non-`2xx` status is returned.

```ts
import { ClientException } from '@voiceflow/exception';

const fetch = new FetchClient();

try {
  await fetch.get('http://example.com'); // return 404
} catch (err) {
  if (ClientException.instanceOf(err)) {
    err.errorCode; // ErrorCode | undefined
  }
}
```

### Raw Request Passthrough

Use the `raw()` method to bypass all of the features above to access the underlying `fetch` interface directly.

#### Browser Native `fetch` Request

```ts
const fetch = new FetchClient();

const url = new URL('http://example.com');
const request = new Request(url);

const response = await fetch.raw(request); // Response
```

#### Node.JS Native `undici.fetch` Request

```ts
import { URL } from 'node:url';
import * as undici from 'undici';

const fetch = new FetchClient(undici.fetch);

const url = new URL('http://example.com');
const request = new undici.Request(url);

const response = await fetch.raw(request); // undici.Response
```
