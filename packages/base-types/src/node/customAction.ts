import { Nullable } from '@voiceflow/common';
import { NodeType } from './constants';
import { BaseStep, BaseStepPorts, BasePort, BaseEvent, BaseNode, NodeID } from './utils';

/**
 * Custom Action v1.5, built for the Custom Blocks MVP.
 */

export interface Path {
    /**
     * Human-readable identifier for the path.
     */
    label: string;
}

export interface StepData<Payload = unknown> {
    _v: 1.5;
    stop?: boolean;
    paths: Path[];
    payload: Payload;
    defaultPath?: number;

    /**
     * User-defined parameters that are substituted into the JSON payload of
     * the custom action.
     */
    parameters: string[];
}

export interface StepPort<Event = BaseEvent> extends BasePort {
    data: { event?: Event };
}

export interface StepPorts<Event> extends BaseStepPorts<
    Record<string,
        StepPort<Event>>,
    StepPort<Event>[]
> { }

export interface Step<Payload = unknown, Event = BaseEvent> extends BaseStep<
    StepData<Payload>,
    StepPorts<Event>
> {
    type: NodeType.CUSTOM_ACTION;
}

export interface NodePath<Event = BaseEvent> {
    label?: string;
    event?: Event;
    nextID: Nullable<NodeID>;
}

export interface Node<Event = BaseEvent> extends BaseNode {
    _v: 1.5;
    stop: boolean;
    paths: Array<NodePath<Event>>;
    payload: unknown;
    defaultPath?: number; // index starting from 0
}
