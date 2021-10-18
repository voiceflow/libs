import { SlotMapping } from '@/models';

export interface SlotMappings {
  mappings?: SlotMapping[];
}

export interface NodeVariablesMappings {
  inputs?: [string, string][];
  outputs?: [string, string][];
}
