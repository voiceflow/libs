/* eslint-disable @typescript-eslint/no-empty-interface */

import { Models, Project } from '@voiceflow/base-types';

export interface VoiceProject extends Project.BaseProject {}

export const defaultVoiceProjectData = (data: Partial<Models.BasePlatformData> = {}): Models.BasePlatformData => ({
  ...Project.defaultBaseProjectData(data),
});
