import { AnyRecord } from '@base-types/types';

import { AnyBaseStepPorts, BasePortList, NextStepPorts } from './port';

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

export type StepOnlyData<Ports, PortsOld> = { ports?: never; portsV2: Ports } | { ports: PortsOld; portsV2?: never };

export interface BaseStep<Data extends AnyRecord = AnyRecord, Ports = NextStepPorts, PortsOld = BasePortList>
  extends BaseDiagramNode<Data & StepOnlyData<Ports, PortsOld>> {}

export interface AnyBaseStep extends BaseStep<AnyRecord, AnyBaseStepPorts> {}
