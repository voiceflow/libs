# NestJS Redis

Redis, but for NestJS

## Installation

```sh
yarn add @voiceflow/nestjs-redis ioredis
yarn add -D @types/ioredis
```

## Usage

The redis module can be setup in a couple different ways using `forRootAsync`:

- A `RedisOptions` object can be provided via `useValue`.
- A `useFactory` function can be provided to return a `RedisOptions` object (or a promise for one!).
- A class implementing `RedisOptions` can be provided using `useClass`.

```ts
@Module({
  imports: [
    RedisModule.forRootAsync({
      imports: [],

      // Union field, one of `useValue`, `useFactory`, or `useClass`:
      useValue: {
        host: '0.0.0.0',
        port: 6379,
      },
      useFactory: () => getRedisConfig(),
      useClass: RedisConfigService,
    }),
  ],
})
export class AppModule {}
```

If you have an existing redis connection that you'd like to reuse, you can provide that in `forRoot`.

```ts
import IORedis from 'ioredis';

const redisConnection = new IORedis(...);

@Module({
  imports: [
    RedisModule.forRoot(redisConnection),
  ],
})
export class AppModule {}
```
