# NestJS Rate Limit

HTTP request rate limiting for NestJS.

## Installation

```sh
yarn add @voiceflow/nestjs-rate-limit
```

This package also requires you to have `@voiceflow/nestjs-redis` installed since `RateLimitModule` uses `RedisModule` as a dependency.

## Usage

### Module registration

The redis module can be setup in a couple different ways using `forRootAsync`:

- A `RateLimitOptions` object can be provided via `useValue`.
- A `useFactory` function can be provided to return a `RateLimitOptions` object (or a promise for one!).
- A class implementing `RateLimitOptions` can be provided using `useClass`.

```ts
import { RateLimitModule, RateLimitService, RateLimitOptions } from '@voiceflow/nestjs-rate-limit';

@Module({
  imports: [
    RateLimitModule.forRootAsync({
      imports: [],

      // Union field, one of `useValue`, `useFactory`, or `useClass`:
      useValue: {
        serviceName: 'my-service',
        points: 5,
        duration: 60,
      },
      useFactory: () => getRateLimitConfig(),
      useClass: RateLimitConfigService,
    }),
  ],
})
export class AppModule {}
```

If you have an existing rate limit options object that you'd like to reuse, you can provide that in `forRoot`.

```ts
const rateLimitOptions = { ... };

@Module({
  imports: [
    RateLimitModule.forRoot(rateLimitOptions),
  ],
})
export class AppModule {}
```

Once the `RateLimitModule` is globally registered, `RateLimitService` can be injected in other providers without having to import `RateLimitModule` again.

### `RateLimitGuard`

By default no routes will be rate limited.
To apply rate limiting to a route or controller use `RateLimitGuard`:

```ts
import { Controller, UseGuards } from '@nestjs/common';
import { RateLimitGuard } from '@voiceflow/nestjs-rate-limit';

@Controller()
@UseGuards(RateLimitGuard)
export class MyController {
  /* ... */
}
```
