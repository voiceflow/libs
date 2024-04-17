export declare const VariableDatatype: {
  readonly ANY: 'any';
  readonly TEXT: 'text';
  readonly DATE: 'date';
  readonly IMAGE: 'image';
  readonly NUMBER: 'number';
  readonly BOOLEAN: 'boolean';
  /**
   * @deprecated
   */
  readonly STRING: 'string';
};

export type VariableDatatype = (typeof VariableDatatype)[keyof typeof VariableDatatype];

export interface BaseCompiledCMSVariable {
  isSystem: boolean;
  defaultValue: string | null;
}

export interface CompiledSystemCMSVariable extends BaseCompiledCMSVariable {
  isSystem: true;
}

export interface CompiledUserCMSVariable extends BaseCompiledCMSVariable {
  isSystem: false;
  datatype: VariableDatatype;
  isArray: boolean;
}

export type CompiledCMSVariable = CompiledSystemCMSVariable | CompiledUserCMSVariable;
