export enum ProjectNLP {
  /**
   * @deprecated
   * LUIS NLU is being sunset by Microsoft and we are replacing it with VFNLU. Use
   * `ProjectNLP.VFNLU` instead.
   */
  LUIS = 'LUIS',
  VFNLU = 'VFNLU',
}

export type Variable = string;
