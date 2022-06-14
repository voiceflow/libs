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
  target: Nullable<string>;
}

export interface BaseReferencePort extends BasePort {
  ref: { key: string } | { type: PortType };
}

export interface BaseStepPorts<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _Typed extends Partial<Record<PortType, BasePort>>,
  Dynamic extends BasePort = BasePort,
  Reference extends BaseReferencePort = BaseReferencePort
> {
  dynamic: Dynamic[];
  byRef: Reference[];
}

export interface AnyBaseStepPorts extends BaseStepPorts<Partial<Record<PortType, BasePort>>, BasePort, BaseReferencePort> {}

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

export interface EmptyStepPorts extends BaseStepPorts<EmptyObject> {}

export interface NextStepPorts extends BaseStepPorts<BuiltInNextPort> {}

export interface SuccessFailStepPorts extends BaseStepPorts<BuiltInNextFailPorts> {}

export interface DynamicOnlyStepPorts extends BaseStepPorts<EmptyObject> {}

export interface NoMatchNoReplyStepPorts extends BaseStepPorts<BuiltInNoMatchNoReplyPorts> {}

/**
 * @deprecated
 */
export type BasePortList<Port extends BasePort = BasePort> = [Port, ...Port[]];
