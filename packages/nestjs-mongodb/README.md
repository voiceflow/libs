# NestJS MongoDB

MongoDB, but for NestJS

## Installation

```sh
yarn add @voiceflow/nestjs-mongodb mongodb
yarn add -D @types/mongodb
```

## Usage

The mongo module can be setup in a couple different ways using `forRootAsync`:

- A `MongoOptions` object can be provided via `useValue`.
- A `useFactory` function can be provided to return a `MongoOptions` object (or a promise for one!).
- A class implementing `MongoOptions` can be provided using `useClass`.

```ts
import { MongoModule, MongoService, MongoOptions } from '@voiceflow/nestjs-mongodb';

@Module({
  imports: [
    MongoModule.forRootAsync({
      imports: [],

      // Union field, one of `useValue`, `useFactory`, or `useClass`:
      useValue: {
        host: '0.0.0.0',
        port: 6379,
      },
      useFactory: () => getMongoConfig(),
      useClass: MongoConfigService,
    }),
  ],
})
export class AppModule {}
```

If you have an existing redis connection that you'd like to reuse, you can provide that in `forRoot`.

```ts
import { MongoClient } from 'mongodb';

const mongoConnection = MongoClient.connect(...)

@Module({
  imports: [
    MongoModule.forRoot(mongoConnection),
  ],
})
export class AppModule {}
```

Once the `MongoModule` is globally registered, `MongoService` can be injected in other providers without having to import `MongoModule` again.
