import actionCreatorFactory from 'typescript-fsa';

export const createAction = actionCreatorFactory();

export const typeFactory =
  (...parts: string[]) =>
  (name: string): string =>
    [...parts, name].join('.');

export class Channel<K extends string> {
  constructor(public variables: K[], public build: (params: Record<K, string>) => string) {}

  buildMatcher() {
    return this.build(this.variables.reduce((acc, key) => Object.assign(acc, { [key]: `:${key}` }), {} as Record<K, string>));
  }

  extend<L extends string>(variables: L[], build: (params: Record<L, string>) => string) {
    return new Channel<K | L>([...this.variables, ...variables], (params) => `${this.build(params)}/${build(params)}`);
  }
}

export type ChannelParams<T extends Channel<string>> = T extends Channel<infer R> ? Record<R, string> : never;

export const createChannel = <K extends string>(variables: K[], build: (params: Record<K, string>) => string) => new Channel(variables, build);
