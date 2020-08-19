import { Project } from '@voiceflow/api-sdk';

import { AlexaProjectMemberData } from './member';
import { AlexaProduct } from './product';

export * from './product';
export * from './member';

export type AlexaProjectData = {
  products: AlexaProduct[];
};

export type AlexaProject = Project<AlexaProjectData, AlexaProjectMemberData> & {
  platform: 'alexa';
};

export const defaultAlexaProjectData = ({ products = [] }: Partial<AlexaProjectData> = {}): AlexaProjectData => ({
  products,
});
