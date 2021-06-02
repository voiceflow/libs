/* eslint-disable camelcase */
import { Nullable } from '@voiceflow/api-sdk';

import { BaseStep, IntegrationType, IntegrationUser, NodeID, NodeType } from './types';

export enum GoogleSheetsActionType {
  CREATE_DATA = 'Create Data',
  UPDATE_DATA = 'Update Data',
  DELETE_DATA = 'Delete Data',
  RETRIEVE_DATA = 'Retrieve Data',
}

export interface GoogleSheetsValueLabel {
  value: number;
  label: string;
}

export interface GoogleSheetsMapping {
  arg1: GoogleSheetsValueLabel;
  arg2: string;
}

export interface GoogleSheetsSpreadsheet {
  value: string;
  label: string;
}

export interface StepData {
  user?: IntegrationUser;
  sheet: Nullable<GoogleSheetsValueLabel>;
  endRow: string;
  mapping: GoogleSheetsMapping[];
  startRow: string;
  rowNumber: string;
  rowValues: string[];
  matchValue: string;
  spreadsheet: Nullable<GoogleSheetsSpreadsheet>;
  headerColumn: Nullable<GoogleSheetsValueLabel>;
  selectedAction: Nullable<GoogleSheetsActionType>;
  selectedIntegration: IntegrationType.GOOGLE_SHEETS;
}

export interface NodeData {
  fail_id?: NodeID;
  success_id?: NodeID;
  action_data: {
    user?: IntegrationUser;
    sheet: Nullable<number>;
    mapping: { arg1: number; arg2: string }[];
    end_row: string;
    start_row: string;
    row_values: string[];
    row_number: string;
    match_value: string;
    spreadsheet: Nullable<string>;
    header_column: Nullable<number>;
  };
  selected_action: Nullable<GoogleSheetsActionType>;
  selected_integration: IntegrationType.GOOGLE_SHEETS;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.GOOGLE_SHEETS;
}
