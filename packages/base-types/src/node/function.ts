import { Markup } from '@base-types/markup';
import { PortType } from '@base-types/models';

import { NodeType } from './constants';
import { BaseNode, BasePort, BaseStep, EmptyStepPorts } from './utils';

/// ////////////////////////// DESIGN-TIME STEP /////////////////////////////

export interface FunctionPort extends BasePort {
  type: PortType.FUNCTION;
}

export interface StepPorts extends EmptyStepPorts {
  byKey: Record<string, FunctionPort>;
}

export interface StepData {
  /**
   * ID of the Function resource pointed to by this Function step.
   */
  functionID: string | null;

  /**
   * Mapping of input variable name to input variable value
   */
  inputMapping: Record<string, Markup>;

  /**
   * Mapping of output variable name to output variable value
   */
  outputMapping: Record<string, string | null>;
}

export interface Step extends BaseStep<StepData, StepPorts> {
  type: NodeType.FUNCTION;
}

/// ////////////////////////// COMPILE-TIME STEP /////////////////////////////

export interface CompiledMarkupSpan {
  text: CompiledMarkup;
  attributes?: Record<string, unknown>;
}

export interface CompiledVariable {
  /**
   * Name of the Voiceflow variable
   */
  name: string;

  /**
   * ID of the Voiceflow variable
   */
  variableID: string;
}

export interface CompiledEntity {
  /**
   * Name of the entity
   */
  name: string;

  /**
   * ID of the entity
   */
  entityID: string;
}

export type CompiledMarkup = Array<string | CompiledVariable | CompiledEntity | CompiledMarkupSpan>;

export enum FunctionVariableType {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Array = 'array',
  Object = 'object',
}

export interface CompiledVariableConfig {
  /**
   * The type of the variable.
   *
   * NOTE: For Functions P0, 8 Nov 2023, the type is hardcoded to be a `string`.
   */
  type: FunctionVariableType.String;
}

export interface CompiledFunctionData {
  /**
   * Actual code to be executed by the Function
   */
  code: string;

  /**
   * Mapping of input variable name to variable configuration
   */
  inputVars: Record<string, CompiledVariableConfig>;

  /**
   * Mapping of output variable name to variable configuration
   */
  outputVars: Record<string, CompiledVariableConfig>;
}

export interface Node extends BaseNode {
  type: NodeType.FUNCTION;

  /**
   * Function definition
   */
  function: {
    data: CompiledFunctionData;
  };

  /**
   * Mapping of input variable name to input variable value
   */
  inputMapping: Record<string, CompiledMarkup>;

  /**
   * Mapping of output (Function) variable name to Voiceflow variable name
   */
  outputMapping: Record<string, string | null>;

  /**
   * Mapping of the Function path's "exit code" to the next step ID
   */
  paths: Record<string, string>;
}
