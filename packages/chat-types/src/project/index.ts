/* eslint-disable @typescript-eslint/no-empty-interface */

import { Models, Project } from '@voiceflow/base-types';

export interface ChatProject extends Project.BaseProject {}

export const defaultChatProjectData = (data: Partial<Models.BasePlatformData> = {}): Models.BasePlatformData => ({
  ...Project.defaultBaseProjectData(data),
});
