import { BaseNode } from '@voiceflow/base-types';

import { NodeType } from './constants';

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

export interface Reminder {
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
  recurrence?: { byDay?: string; freq: RecurrenceFreq };
  recurrenceBool: boolean;
}

export interface StepData {
  reminder: Reminder;
}

export interface StepPorts extends BaseNode.Utils.SuccessFailStepPorts {}

export interface Step extends BaseNode.Utils.BaseStep<StepData, StepPorts> {
  type: NodeType.REMINDER;
}

export interface NodeReminder extends Omit<Reminder, 'name' | 'recurrenceBool' | 'recurrence'> {
  recurrence?: { byDay?: string[]; freq: RecurrenceFreq };
}

export interface Node extends BaseNode.Utils.BaseNode, BaseNode.Utils.NodeSuccessFailID {
  type: NodeType.REMINDER;
  reminder: NodeReminder;
}
