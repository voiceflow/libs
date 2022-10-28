import { ClientException } from '@voiceflow/exception';

export const sdkMiddleware = {
  onError: async ({ error }: { error: unknown }) => {
    if (ClientException.instanceOf(error)) {
      throw error;
    }
  },
};
