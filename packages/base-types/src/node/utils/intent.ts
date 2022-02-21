export enum IntentScope {
  NODE = 'NODE',
  GLOBAL = 'GLOBAL',
}

export interface StepIntentScope {
  intentScope?: IntentScope;
}

export interface NodeIntentScope {
  intentScope?: IntentScope;
}
