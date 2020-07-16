import * as t from 'io-ts';
import { ThrowReporter } from 'io-ts/lib/ThrowReporter';

export * from './io';

export const validate = (validation: t.Validation<unknown>): void => ThrowReporter.report(validation);
