import { AnyRecord, Nullable } from '@base-types/types';

/**
 * @deprecated use BaseNode instead
 */
export type Node<T extends string = string, D extends AnyRecord = AnyRecord> = {
  id: string;
  type: T;
} & D;

export interface BaseNode {
  id: string;
  type: string;
}

export type Point = [x: number, y: number];

export interface BaseDiagramNode<D extends AnyRecord = AnyRecord> {
  type: string;
  data: D;
  nodeID: string;
  coords?: Point;
}

export interface BlockOnlyData {
  name: string;
  color: string;
  steps: string[];
}

export interface BaseBlock<D extends AnyRecord = AnyRecord> extends BaseDiagramNode<D & BlockOnlyData> {
  coords: Point;
}

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

// [BasePort, ...BasePort[]] means one or more ports
export interface StepOnlyData<P = [BasePort, ...BasePort[]]> {
  ports: P;
}

export interface BaseStep<D extends AnyRecord = AnyRecord, P = [BasePort, ...BasePort[]]> extends BaseDiagramNode<D & StepOnlyData<P>> {}
