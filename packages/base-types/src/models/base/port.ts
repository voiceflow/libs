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

  /**
   * @deprecated this will now be the refID value when the refType is 'builtin'
   */
  type?: string | PortType;
}

export enum ReferenceType {
  /**
   * describes a port that is not affected by step reorder operations
   */
  PERSISTENT = 'persistent',
  /**
   * describes a port of a pre-defined type (next, no-match, no-reply, etc.)
   */
  BUILTIN = 'builtin',

  /**
   * eventually we can introduce this alongside a portsV3 structure that is
   * just an array of BaseReferencePorts
   */
  // DYNAMIC = 'dynamic'
}

export interface ReferenceMixin {
  refType: ReferenceType;
  refID: string;
}

export interface PersistentReference extends ReferenceMixin {
  refType: ReferenceType.PERSISTENT;
}

export interface BuiltinReference extends ReferenceMixin {
  refType: ReferenceType.BUILTIN;
  refID: PortType;
}

export type BaseReference = PersistentReference | BuiltinReference;

export type BaseReferencePort = BasePort & BaseReference;

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
