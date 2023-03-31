export enum GPT_MODEL {
  DaVinci_003 = 'text-davinci-003',
  GPT_3_5_turbo = 'gpt-3.5-turbo',
  GPT_4 = 'gpt-4',
}

export const ChatModels = [GPT_MODEL.GPT_3_5_turbo, GPT_MODEL.GPT_4];

export interface AIModelParams {
  model?: GPT_MODEL;
  temperature?: number;
  tokens?: number;
  system?: string;
}

export interface AIContextParams {
  memoryTurns?: number;
}
