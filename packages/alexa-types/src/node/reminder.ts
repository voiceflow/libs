import { Node } from '@voiceflow/base-types';

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

export interface Step extends Node.Utils.BaseStep<StepData> {
  type: NodeType.REMINDER;
}

export interface NodeReminder extends Omit<Reminder, 'name' | 'recurrenceBool' | 'recurrence'> {
  recurrence?: { byDay?: string[]; freq: RecurrenceFreq };
}

export interface Node extends Node.Utils.BaseNode, Node.Utils.NodeSuccessFailID {
  type: NodeType.REMINDER;
  reminder: NodeReminder;
}
