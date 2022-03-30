import { AnyRecord } from '@base-types/types';

import { BasePortList, NextStepPorts } from './port';

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

export type StepOnlyData<P, P2> =
  | {
      ports: P;
      portsV2: never;
    }
  | {
      ports: never;
      portsV2: P2;
    };

export interface BaseStep<D extends AnyRecord = AnyRecord, P = BasePortList, P2 = NextStepPorts> extends BaseDiagramNode<D & StepOnlyData<P, P2>> {}
