import type { NodeType } from './constants';
import type { BaseNode, BaseStep, NodeNextID, StepCanvasNodeVisibility } from './utils';

export interface StepDataDialog<Dialog> {
  dialogs: Dialog[];
}

export interface StepData extends StepCanvasNodeVisibility {
  randomize: boolean;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.SPEAK;
}

export interface SpeakNode<Speak> {
  speak: Speak;
}

export interface RandomSpeakNode<Speak> {
  random_speak: Speak[];
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.SPEAK;
}
