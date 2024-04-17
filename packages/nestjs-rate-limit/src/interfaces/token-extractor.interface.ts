import type { ExecutionContext } from '@nestjs/common';

/**
 * Extracts user auth tokens from requests
 * @returns The user token, if it could be extracted
 */
export type TokenExtractor = (executionContext: ExecutionContext) => string | undefined;
