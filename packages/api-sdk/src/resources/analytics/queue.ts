class Queue {
  static voidFunc: () => undefined;

  private queue: Record<string, unknown>[] = [];

  private enqueuePromise: Promise<void> | null = null;

  constructor(private onFlush: (payload: Record<string, unknown>[]) => Promise<any>) {}

  public async enqueue(payload: Record<string, unknown>): Promise<void> {
    this.queue.push(payload);

    if (this.enqueuePromise) {
      return;
    }

    // we await for Promise.resolve, to push all events that came in the same tick from event loop
    this.enqueuePromise = Promise.resolve();

    await this.enqueuePromise;

    this.flush();

    this.enqueuePromise = null;
  }

  public flush(): Promise<void> {
    const payload = this.queue;

    this.queue = [];

    if (!payload.length) {
      return Promise.resolve();
    }

    return this.onFlush(payload)
      .then(Queue.voidFunc)
      .catch(() => {
        this.queue.push(...payload);
      });
  }
}

export default Queue;
