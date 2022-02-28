import { SourceFile } from 'ts-morph';

export type SourceFormatter = (sourceFile: SourceFile) => void;
