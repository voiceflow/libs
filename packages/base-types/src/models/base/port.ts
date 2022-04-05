import { EmptyRecord, Nullable } from '@base-types/types';

export enum PortType {
  FAIL = 'fail',
  NEXT = 'next',
  PAUSE = 'pause',
  NO_REPLY = 'no-reply',
  NO_MATCH = 'else',
  PREVIOUS = 'previous',
}

export interface BasePort {
  id: string;
  type: string | PortType;
  target: Nullable<string>;
}

export interface BaseStepPorts<Builtin extends Partial<Record<PortType, BasePort>>, Dynamic extends BasePort[] = BasePort[]> {
  builtIn: Builtin;
  dynamic: Dynamic;
}

export interface BuiltInNextPort {
  [PortType.NEXT]: BasePort;
}

export interface BuiltInFailPort {
  [PortType.NEXT]: BasePort;
}

export interface BuiltInNoMatchPort {
  [PortType.NO_MATCH]?: BasePort;
}

export interface BuiltInNoReplyPort {
  [PortType.NO_REPLY]?: BasePort;
}

export interface BuiltInNextFailPorts extends BuiltInNextPort, BuiltInFailPort {}

export interface BuiltInNoMatchNoReplyPorts extends BuiltInNoMatchPort, BuiltInNoReplyPort {}

export interface EmptyStepPorts extends BaseStepPorts<EmptyRecord, []> {}

export interface NextStepPorts<Dynamic extends BasePort[] = BasePort[]> extends BaseStepPorts<BuiltInNextPort, Dynamic> {}

export interface SuccessFailStepPorts<Dynamic extends BasePort[] = BasePort[]> extends BaseStepPorts<BuiltInNextFailPorts, Dynamic> {}

export interface DynamicOnlyStepPorts<Dynamic extends BasePort[] = BasePort[]> extends BaseStepPorts<EmptyRecord, Dynamic> {}

export interface NoMatchNoReplyStepPorts<Dynamic extends BasePort[] = BasePort[]> extends BaseStepPorts<BuiltInNoMatchNoReplyPorts, Dynamic> {}

/**
 * @deprecated
 */
export type BasePortList<Port extends BasePort = BasePort> = [Port, ...Port[]];
