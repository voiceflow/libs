export enum NLUUnclassifiedDataType {
  CONVERSATION = 'conversation',
  PROTOTYPE = 'prototype',
  NLU_DATASOURCE_IMPORT = 'nluDatasourceImport',
}

export interface NLUUnclassifiedUtterances {
  id: string;
  utterance: string;
  sourceID?: string;
}

export interface NLUUnclassifiedData {
  key?: string;
  creatorID?: number;
  type: NLUUnclassifiedDataType;
  name: string;
  utterances: NLUUnclassifiedUtterances[];
  importedAt?: string;
}
