/* eslint-disable @typescript-eslint/no-empty-interface */

import { Project, BasePlatformData } from '@voiceflow/base-types';

export interface ChatProject extends Project.BaseProject {}

export const defaultChatProjectData = (data: Partial<BasePlatformData> = {}): BasePlatformData => ({
  ...Project.defaultBaseProjectData(data),
});
