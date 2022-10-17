import { BaseVersion } from '@voiceflow/base-types';

export interface ChatPublishing extends BaseVersion.Publishing {
  title?: string;
  image?: string;
  color?: string;
  avatar?: string;
  spacing?: { side: number; bottom: number };
  launcher?: string;
  position?: string;
  persistence?: boolean;
  description?: string;
}
