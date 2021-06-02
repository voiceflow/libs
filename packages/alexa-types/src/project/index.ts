import { Project } from '@voiceflow/api-sdk';

import { AlexaProjectMemberData } from './member';
import { AlexaProduct } from './product';

export * from './member';
export * from './product';

export interface AlexaProjectData {
  products: Record<string, AlexaProduct>;
}

export interface AlexaProject extends Project<AlexaProjectData, AlexaProjectMemberData> {
  platform: 'alexa';
}

export const defaultAlexaProjectData = ({ products = {} }: Partial<AlexaProjectData> = {}): AlexaProjectData => ({
  products,
});
