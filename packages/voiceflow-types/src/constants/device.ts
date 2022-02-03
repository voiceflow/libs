import { BaseNode } from '@voiceflow/base-types';

export const DEVICE_SIZE_MAP: Record<BaseNode.Visual.DeviceType, BaseNode.Visual.Dimensions> = {
  [BaseNode.Visual.DeviceType.MOBILE]: { width: 375, height: 812 },
  [BaseNode.Visual.DeviceType.TABLET]: { width: 1024, height: 1366 },
  [BaseNode.Visual.DeviceType.DESKTOP]: { width: 1440, height: 900 },
  [BaseNode.Visual.DeviceType.SMART_WATCH]: { width: 184, height: 224 },

  [BaseNode.Visual.DeviceType.TELEVISION]: { width: 1920, height: 1200 },
  [BaseNode.Visual.DeviceType.IN_CAR_DISPLAY]: { width: 1200, height: 800 },

  [BaseNode.Visual.DeviceType.ECHO_SPOT]: { width: 480, height: 480 },
  [BaseNode.Visual.DeviceType.ECHO_SHOW_8]: { width: 1280, height: 800 },
  [BaseNode.Visual.DeviceType.ECHO_SHOW_10]: { width: 1280, height: 800 },

  [BaseNode.Visual.DeviceType.FIRE_HD_8]: { width: 1280, height: 800 },
  [BaseNode.Visual.DeviceType.FIRE_HD_10]: { width: 1920, height: 1200 },
  [BaseNode.Visual.DeviceType.FIRE_TV_CUBE]: { width: 1920, height: 1080 },

  [BaseNode.Visual.DeviceType.GOOGLE_NEST_HUB]: { width: 1280, height: 730 },
};
