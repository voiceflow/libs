import { Models } from '@voiceflow/base-types';
import { Project } from '@voiceflow/voice-types';

import { AlexaProjectMemberData } from './member';
import { AlexaProduct } from './product';

export * from './member';
export * from './product';

export interface AlexaProjectData {
  products: Record<string, AlexaProduct>;
}

export interface AlexaProject extends Project.VoiceProject {
  members: Models.Member<AlexaProjectMemberData>[];
  platform: 'alexa';
  platformData: AlexaProjectData;
}

export const defaultAlexaProjectData = ({ products = {}, ...data }: Partial<AlexaProjectData> = {}): AlexaProjectData => ({
  ...Project.defaultVoiceProjectData(data),
  products,
});
