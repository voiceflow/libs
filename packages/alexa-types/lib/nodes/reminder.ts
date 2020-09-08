import { DefaultNode, DefaultStep, NodeType } from './types';

export enum ReminderType {
  SCHEDULED_ABSOLUTE = 'SCHEDULED_ABSOLUTE',
  SCHEDULED_RELATIVE = 'SCHEDULED_RELATIVE',
}

export enum ReminderClientType {
  TIME = 'timer',
  SCHEDULED = 'scheduled',
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
    recurrence?: { startDateTime?: string; endDateTime?: string; recurrenceRules: string[] };
  };
  fail_id?: string;
  success_id?: string;
};

export type Step = DefaultStep<NodeType.REMINDER, StepData>;
export type Node = DefaultNode<NodeType.REMINDER, NodeData>;
