export const delay = <T extends any = boolean>(timeout: number, value: T = true as T): Promise<T> =>
  new Promise<T>((resolve) => setTimeout(resolve.bind(null, value), timeout));

export const rejectIn = (timeout: number): Promise<never> =>
  // eslint-disable-next-line promise/param-names
  new Promise<never>((_resolve, reject) => setTimeout(() => reject(new Error('Rejected by timeout!')), timeout));

interface ControlledPromise<T> extends Promise<T> {
  reject: (reason?: any) => void;
  resolve: (value: T) => void;
}

export const createControlledPromise = <T>(): ControlledPromise<T> => {
  let res: (value: T) => void;
  let rej: (reason?: any) => void;

  const promise: ControlledPromise<T> = new Promise<T>((resolve, reject) => {
    res = resolve;
    rej = reject;
  }) as ControlledPromise<T>;

  promise.reject = rej!;
  promise.resolve = res!;

  return promise;
};
