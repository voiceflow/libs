import { EmptyObject, Nullable } from '@voiceflow/common';

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

export interface BaseStepPorts<
  Builtin extends Partial<Record<PortType, BasePort>>,
  Dynamic extends BasePort[] = BasePort[],
  ByKey extends Partial<Record<string, BasePort>> = Partial<Record<string, BasePort>>
> {
  builtIn: Builtin;
  dynamic: Dynamic;
  byKey: ByKey;
}

export interface AnyBaseStepPorts extends BaseStepPorts<Record<string, BasePort>, BasePort[]> {}

export interface BuiltInNextPort {
  [PortType.NEXT]: BasePort;
}

export interface BuiltInFailPort {
  [PortType.FAIL]: BasePort;
}

export interface BuiltInNoMatchPort {
  [PortType.NO_MATCH]?: BasePort;
}

export interface BuiltInNoReplyPort {
  [PortType.NO_REPLY]?: BasePort;
}

export interface BuiltInNextFailPorts extends BuiltInNextPort, BuiltInFailPort {}

export interface BuiltInNoMatchNoReplyPorts extends BuiltInNoMatchPort, BuiltInNoReplyPort {}

export interface EmptyStepPorts extends BaseStepPorts<EmptyObject, []> {}

export interface NextStepPorts<Dynamic extends BasePort[] = BasePort[]> extends BaseStepPorts<BuiltInNextPort, Dynamic> {}

export interface SuccessFailStepPorts<Dynamic extends BasePort[] = BasePort[]> extends BaseStepPorts<BuiltInNextFailPorts, Dynamic> {}

export interface DynamicOnlyStepPorts<Dynamic extends BasePort[] = BasePort[]> extends BaseStepPorts<EmptyObject, Dynamic> {}

export interface NoMatchNoReplyStepPorts<Dynamic extends BasePort[] = BasePort[]> extends BaseStepPorts<BuiltInNoMatchNoReplyPorts, Dynamic> {}

/**
 * @deprecated
 */
export type BasePortList<Port extends BasePort = BasePort> = [Port, ...Port[]];
