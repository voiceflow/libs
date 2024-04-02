export const FunctionVariableType = {
    ANY: 'any',
    ARRAY: 'array',
    STRING: 'string',
    OBJECT: 'object',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
} as const;

export type FunctionVariableType = typeof FunctionVariableType[keyof typeof FunctionVariableType];

export interface FunctionCompiledVariableDeclaration {
    type: FunctionVariableType;
}

export interface FunctionCompiledDefinition {
    codeId: string;
    inputVars: Record<string, FunctionCompiledVariableDeclaration>;
    outputVars: Record<string, FunctionCompiledVariableDeclaration>;
    pathCodes: string[];
}
