import { SlotMapping } from '@voiceflow/api-sdk';

export interface SlotMappings {
  mappings?: SlotMapping[];
}

export interface NodeVariablesMappings {
  inputs?: [string, string][];
  outputs?: [string, string][];
}
