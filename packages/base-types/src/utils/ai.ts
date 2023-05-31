export enum GPT_MODEL {
  DaVinci_003 = 'text-davinci-003',
  GPT_3_5_turbo = 'gpt-3.5-turbo',
  GPT_4 = 'gpt-4',
  CLAUDE_V1 = 'claude-v1',
  CLAUDE_V1_INSTANT = 'claude-v1-instant',
}

export const ChatModels = [GPT_MODEL.GPT_3_5_turbo, GPT_MODEL.GPT_4];

export enum PROMPT_MODE {
  PROMPT = 'prompt',
  MEMORY = 'memory',
  MEMORY_PROMPT = 'memory_prompt',
}

export enum DATA_SOURCE {
  KNOWLEDGE_BASE = 'knowledge_base',
  DEFAULT = 'default',
}

export interface AIModelParams {
  model?: GPT_MODEL;
  temperature?: number;
  maxTokens?: number;
  system?: string;
}

export interface AIContextParams {
  mode: PROMPT_MODE;
  prompt: string;
}

export interface AIKnowledgeParams {
  // make it optional for backward compatibility
  source?: DATA_SOURCE;
}
