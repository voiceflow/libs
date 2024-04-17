import type { BaseVersion } from '@voiceflow/base-types';

export enum ChatPersistence {
  MEMORY = 'memory', // store user token in JS code memory (least persistent)
  LOCAL_STORAGE = 'localStorage', // store user token in local storage (most persistent)
  SESSION_STORAGE = 'sessionStorage', // store user token in session storage
}

export enum ChatPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface ChatPublishing extends BaseVersion.Publishing {
  title?: string;
  image?: string;
  color?: string;
  avatar?: string;
  spacing?: { side?: number; bottom?: number };
  launcher?: string;
  position?: ChatPosition;
  watermark?: boolean;
  feedback?: boolean;
  stylesheet?: string | string[];
  persistence?: ChatPersistence;
  description?: string;
}
