import { Node, Step } from '@voiceflow/api-sdk';

import { Voice } from '../types';
import { DialogType, NodeType } from './types';

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
    prompt?: string;
    nextId?: string | null;
  } & ({ speak: string } | { random_speak: string[] })
>;
