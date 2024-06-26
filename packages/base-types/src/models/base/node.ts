import type { AnyRecord } from '@voiceflow/common';

import type { AnyBaseStepPorts, BasePortList, NextStepPorts } from './port';

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

export interface BaseNodeData {
  name?: string;
}

export interface BlockOnlyData extends BaseNodeData {
  name: string;
  color: string;
  steps: string[];
}

export enum BaseNodeType {
  BLOCK = 'block',
  ACTIONS = 'actions',
}

export interface BaseBlock<D extends AnyRecord = AnyRecord> extends BaseDiagramNode<D & BlockOnlyData> {
  type: BaseNodeType.BLOCK;
  coords: Point;
}

export interface ActionsData extends BaseNodeData {
  steps: string[];
}

export interface BaseActions extends BaseDiagramNode<ActionsData> {
  type: BaseNodeType.ACTIONS;
}

export type StepPortsData<Ports, PortsOld> = { ports?: never; portsV2: Ports } | { ports: PortsOld; portsV2?: never };
export type StepOnlyData<Ports, PortsOld> = StepPortsData<Ports, PortsOld> & BaseNodeData;

export interface BaseStep<Data = AnyRecord, Ports = NextStepPorts, PortsOld = BasePortList>
  extends BaseDiagramNode<Data & StepOnlyData<Ports, PortsOld>> {}

export interface AnyBaseStep extends BaseStep<AnyRecord, AnyBaseStepPorts> {}
