export const delay = <T = boolean>(timeout: number, value: T = true as unknown as T): Promise<T> =>
  new Promise<T>((resolve) => {
    setTimeout(() => resolve(value), timeout);
  });

export const rejectIn = (timeout: number): Promise<never> =>
  new Promise<never>((_resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Rejected by timeout!'));
    }, timeout);
  });

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
