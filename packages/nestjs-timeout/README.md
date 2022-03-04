# NestJS Timeout

A NestJS interceptor that will error a request after a timeout is exceeded.

## Installation

```sh
yarn add @voiceflow/nestjs-timeout
```

## Usage

```ts
import { Controller } from '@nestjs/common';
import { TimeoutInterceptor } from '@voiceflow/nestjs-timeout';

@Controller()
// Timeout after 30 seconds
@UseInterceptors(new TimeoutInterceptor(30 * 1000))
export class MyController {
  /* ... */
}
```
