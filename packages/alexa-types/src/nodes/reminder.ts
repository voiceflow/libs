/* eslint-disable camelcase */

import { NodeID } from '@voiceflow/general-types';

import { DefaultNode, DefaultStep, NodeType } from './types';

export enum ReminderType {
  SCHEDULED_ABSOLUTE = 'SCHEDULED_ABSOLUTE',
  SCHEDULED_RELATIVE = 'SCHEDULED_RELATIVE',
}

export enum ReminderClientType {
  TIME = 'timer',
  SCHEDULED = 'scheduled',
}

export enum RecurrenceFreq {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
}

export type StepData = {
  reminder: {
    name: string;
    type: ReminderType;
    text: string;
    time: {
      h: string;
      m: string;
      s: string;
    };
    date: string;
    timezone: string;
    recurrence?: { byDay?: string; freq: string };
    recurrenceBool: boolean;
  };
};

export type NodeData = {
  reminder: {
    type: ReminderType;
    text: string;
    time: {
      h: string;
      m: string;
      s: string;
    };
    date: string;
    timezone: string;
    recurrence?: { byDay?: string[]; freq: RecurrenceFreq };
  };
  fail_id?: NodeID;
  success_id?: NodeID;
};

export type Step = DefaultStep<NodeType.REMINDER, StepData>;
export type Node = DefaultNode<NodeType.REMINDER, NodeData>;
