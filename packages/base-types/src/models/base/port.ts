import { AnyRecord, EmptyRecord, Nullable } from '@base-types/types';

export enum PortType {
  FAIL = 'fail',
  NEXT = 'next',
  PAUSE = 'pause',
  NO_REPLY = 'no-reply',
  NO_MATCH = 'else',
  PREVIOUS = 'previous',
}

export interface BasePort<PD extends AnyRecord = AnyRecord> {
  id: string;
  type: string | PortType;
  data?: PD;
  target: Nullable<string>;
}

export interface BaseStepPorts<BP extends Record<string, BasePort> = Record<string, BasePort>, DP extends BasePort[] = BasePort[]> {
  builtIn: BP;
  dynamic: DP;
}

export interface EmptyStepPorts extends BaseStepPorts<EmptyRecord, []> {}

export interface NextStepPorts<DP extends BasePort[] = []> extends BaseStepPorts<{ [PortType.NEXT]: BasePort }, DP> {}

export interface SuccessFailStepPorts<DP extends BasePort[] = []>
  extends BaseStepPorts<{ [PortType.NEXT]: BasePort; [PortType.FAIL]: BasePort }, DP> {}

// [BasePort, ...BasePort[]] means one or more ports
export type BasePortList = [BasePort, ...BasePort[]];
