/* eslint-disable camelcase */

import { NodeID } from '@voiceflow/general-types';

import { BaseNode, BaseStep, NodeType } from './types';

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

export interface Step extends BaseStep<StepData> {
  type: NodeType.REMINDER;
}

export interface NodeReminder extends Omit<Reminder, 'name' | 'recurrenceBool' | 'recurrence'> {
  recurrence?: { byDay?: string[]; freq: RecurrenceFreq };
}

export interface Node extends BaseNode {
  type: NodeType.REMINDER;
  reminder: NodeReminder;
  fail_id?: NodeID;
  success_id?: NodeID;
}
