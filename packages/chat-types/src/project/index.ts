/* eslint-disable @typescript-eslint/no-empty-interface */

import { BasePlatformData } from '@voiceflow/api-sdk';
import { Project } from '@voiceflow/base-types';

export interface ChatProject extends Project.BaseProject {}

export const defaultChatProjectData = (data: Partial<BasePlatformData> = {}): BasePlatformData => ({
  ...Project.defaultBaseProjectData(data),
});
