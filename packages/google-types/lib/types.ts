/* eslint-disable camelcase */
import { oauth2_v2 } from 'googleapis';

export type GoogleProfile = oauth2_v2.Schema$Userinfo;

export enum Voice {
  DEFAULT = 'default', // not a real voice (default no voice)
  AUDIO = 'audio', // not a real voice (use content as audio url)
}

export const DEFAULT_LOCALE_VOICE_MAP = {};

export const REGIONAL_VOICE = [
  {
    label: 'Default',
    options: [Voice.DEFAULT],
  },
  {
    label: 'English US',
    options: [Voice.DEFAULT],
  },
  {
    label: 'English AU',
    options: [Voice.DEFAULT],
  },
  {
    label: 'English GB',
    options: [Voice.DEFAULT],
  },
  {
    label: 'English IN',
    options: [Voice.DEFAULT],
  },
  {
    label: 'German',
    options: [Voice.DEFAULT],
  },
  {
    label: 'Spanish',
    options: [Voice.DEFAULT],
  },
  {
    label: 'Italian',
    options: [Voice.DEFAULT],
  },
  {
    label: 'Japanese',
    options: [Voice.DEFAULT],
  },
  {
    label: 'French',
    options: [Voice.DEFAULT],
  },
  {
    label: 'Portuguese',
    options: [Voice.DEFAULT],
  },
];
