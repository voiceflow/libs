import { Node, Step } from '@voiceflow/api-sdk';

import { Voice } from '../types';
import { NodeType } from './types';

export enum DialogType {
  AUDIO = 'audio',
  VOICE = 'voice',
}

export type SpeakDialog =
  | {
      type: DialogType.VOICE;
      voice: Voice;
      content: string;
    }
  | {
      type: DialogType.AUDIO;
      url: string;
    };

export type SpeakData = {
  randomize: boolean;
  dialogs: SpeakDialog[];
};

// canvas step
export type SpeakStep = Step<NodeType.SPEAK, SpeakData>;

// program node
export type SpeakNode = Node<
  NodeType.SPEAK,
  {
    audio?: string;
    speak?: string;
    prompt?: string;
    nextId?: string;
    random_speak?: string[];
  }
>;
