import { VoiceProject } from '@voiceflow/voice-types';

import type { MemberPlatformData } from './member';
import type { Product } from './product';

export * from './member';
export * from './product';

export interface PlatformData {
  products: Record<string, Product>;
}

export interface Project extends VoiceProject.Project<MemberPlatformData> {
  type: 'voice';
  platform: 'alexa';
  platformData: PlatformData;
}

export const defaultPlatformData = ({ products = {}, ...data }: Partial<PlatformData> = {}): PlatformData => ({
  ...VoiceProject.defaultPlatformData(data),
  products,
});
