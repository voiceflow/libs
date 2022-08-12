import { Nullable } from '@voiceflow/common';

import { NodeType } from './constants';
import { BaseEvent, BaseNode, NodeID } from './utils';

interface NodePath<Event = BaseEvent> {
  label?: string;
  event?: Event;
  nextID: Nullable<NodeID>;
}

export interface Node<Event = BaseEvent> extends BaseNode {
  type: NodeType.CHANNEL_ACTION;
  data: {
    name: string;
    payload: unknown;
  };
  stop: boolean;
  defaultPath?: number; // index starting from 0
  paths: Array<NodePath<Event>>;
}
