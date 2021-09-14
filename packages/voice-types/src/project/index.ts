/* eslint-disable @typescript-eslint/no-empty-interface */

import { BasePlatformData } from '@voiceflow/api-sdk';
import { Project } from '@voiceflow/base-types';

export interface VoiceProject extends Project.BaseProject {}

export const defaultVoiceProjectData = (data: Partial<BasePlatformData> = {}): BasePlatformData => ({
  ...Project.defaultBaseProjectData(data),
});
