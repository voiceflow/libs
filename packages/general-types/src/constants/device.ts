export interface Dimensions {
  width: number;
  height: number;
}

export enum DeviceType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
  SMART_WATCH = 'smart_watch',

  TELEVISION = 'television',
  IN_CAR_DISPLAY = 'in_car_display',

  ECHO_SPOT = 'echo_spot',
  ECHO_SHOW_8 = 'echo_show_8',
  ECHO_SHOW_10 = 'echo_show_10',

  FIRE_HD_8 = 'fire_hd_8',
  FIRE_HD_10 = 'fire_hd_10',
  FIRE_TV_CUBE = 'fire_tv_cube',

  GOOGLE_NEST_HUB = 'google_nest_hub',
}

export const DEVICE_SIZE_MAP: Record<DeviceType, Dimensions> = {
  [DeviceType.MOBILE]: { width: 375, height: 812 },
  [DeviceType.TABLET]: { width: 1024, height: 1366 },
  [DeviceType.DESKTOP]: { width: 1440, height: 900 },
  [DeviceType.SMART_WATCH]: { width: 184, height: 224 },

  [DeviceType.TELEVISION]: { width: 1920, height: 1200 },
  [DeviceType.IN_CAR_DISPLAY]: { width: 1200, height: 800 },

  [DeviceType.ECHO_SPOT]: { width: 480, height: 480 },
  [DeviceType.ECHO_SHOW_8]: { width: 1280, height: 800 },
  [DeviceType.ECHO_SHOW_10]: { width: 1280, height: 800 },

  [DeviceType.FIRE_HD_8]: { width: 1280, height: 800 },
  [DeviceType.FIRE_HD_10]: { width: 1920, height: 1200 },
  [DeviceType.FIRE_TV_CUBE]: { width: 1920, height: 1080 },

  [DeviceType.GOOGLE_NEST_HUB]: { width: 1280, height: 730 },
};
