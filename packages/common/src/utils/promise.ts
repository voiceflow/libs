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
