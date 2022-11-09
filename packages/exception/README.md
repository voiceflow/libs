# exception

Voiceflow standard exceptions and error codes

## Install

```sh
yarn add @voiceflow/exception
```

## Usage

### HTTP Exceptions

These exceptions are meant to be caught and transformed by express middleware or NestJS error filters.
Named exceptions exist for all standard HTTP 4xx and 5xx error codes.

```ts
import { ErrorCode, BadRequestException, NotFoundException, InternalServerErrorException, BadGatewayException } from '@voiceflow/exception';

// default error message
throw new BadRequestException();

// custom error message
throw new NotFoundException('implementation broken');

// internal error code
throw new BadGatewayException({ message: 'request timed out', errorCode: ErrorCode.THIRD_PARTY_TIMEOUT });

try {
  // do something
  } catch (err) {
  // wrap internal error
  throw new InternalServerErrorException({ message: 'implementation error', cause: err });
}
```

### Internal Exceptions

These exceptions can be used within business logic but should caught and wrapped or handled before being returned from a service.

```ts
import { InternalException } from '@voiceflow/exception';

throw new InternalException('some internal error');
```
