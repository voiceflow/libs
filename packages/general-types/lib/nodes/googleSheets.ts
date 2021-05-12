/* eslint-disable camelcase */

import { DefaultStep, IntegrationType, IntegrationUser, NodeID, NodeType } from './types';

export enum GoogleSheetsActionType {
  CREATE_DATA = 'Create Data',
  UPDATE_DATA = 'Update Data',
  DELETE_DATA = 'Delete Data',
  RETRIEVE_DATA = 'Retrieve Data',
}

export type GoogleSheetsValueLabel = {
  value: number;
  label: string;
};

export type GoogleSheetsMapping = {
  arg1: GoogleSheetsValueLabel;
  arg2: string;
};

export type GoogleSheetsSpreadsheet = {
  value: string;
  label: string;
};

export type StepData = {
  user?: IntegrationUser;
  sheet: null | GoogleSheetsValueLabel;
  endRow: string;
  mapping: GoogleSheetsMapping[];
  startRow: string;
  rowNumber: string;
  rowValues: string[];
  matchValue: string;
  spreadsheet: null | GoogleSheetsSpreadsheet;
  headerColumn: null | GoogleSheetsValueLabel;
  selectedAction: null | GoogleSheetsActionType;
  selectedIntegration: IntegrationType.GOOGLE_SHEETS;
};

export type NodeData = {
  fail_id?: NodeID;
  success_id?: NodeID;
  action_data: {
    user?: IntegrationUser;
    sheet: null | number;
    mapping: { arg1: number; arg2: string }[];
    end_row: string;
    start_row: string;
    row_values: string[];
    row_number: string;
    match_value: string;
    spreadsheet: null | string;
    header_column: null | number;
  };
  selected_action: null | GoogleSheetsActionType;
  selected_integration: IntegrationType.GOOGLE_SHEETS;
};

export type Step = DefaultStep<NodeType.GOOGLE_SHEETS, StepData>;
