import { Project } from '@voiceflow/api-sdk';

import { AlexaProjectMemberData } from './member';
import { AlexaProduct } from './product';

export * from './member';
export * from './product';

export type AlexaProjectData = {
  products: Record<string, AlexaProduct>;
};

export type AlexaProject = Project<AlexaProjectData, AlexaProjectMemberData> & {
  platform: 'alexa';
};

export const defaultAlexaProjectData = ({ products = {} }: Partial<AlexaProjectData> = {}): AlexaProjectData => ({
  products,
});
