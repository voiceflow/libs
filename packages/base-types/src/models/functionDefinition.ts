import type { VariableDatatype } from '@base-types/cms/variables';

export interface FunctionCompiledVariableDeclaration {
  type: VariableDatatype;
}

export interface FunctionCompiledDefinition {
  codeId: string;
  inputVars: Record<string, FunctionCompiledVariableDeclaration>;
  outputVars: Record<string, FunctionCompiledVariableDeclaration>;
  pathCodes: string[];
}
