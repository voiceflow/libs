export enum GPT_MODEL {
  DaVinci_003 = 'text-davinci-003',
  GPT_3_5_turbo = 'gpt-3.5-turbo',
  GPT_4 = 'gpt-4',
  GPT_4_turbo = 'gpt-4-turbo',
  GPT_4o = 'gpt-4o',
  CLAUDE_V1 = 'claude-v1',
  CLAUDE_V2 = 'claude-v2',
  CLAUDE_INSTANT_V1 = 'claude-instant-v1',
}

export const ChatModels = [GPT_MODEL.GPT_3_5_turbo, GPT_MODEL.GPT_4, GPT_MODEL.GPT_4_turbo];

export enum PROMPT_MODE {
  PROMPT = 'prompt',
  MEMORY = 'memory',
  MEMORY_PROMPT = 'memory_prompt',
}

export enum DATA_SOURCE {
  KNOWLEDGE_BASE = 'knowledge_base',
  DEFAULT = 'default',
}

export const KNOWLEDGE_BASE_NOT_FOUND = '[not found]';

export interface AIModelParams {
  model?: GPT_MODEL;
  temperature?: number;
  maxTokens?: number;
  system?: string;
}

export interface AICompletionParams {
  // make it optional for backward compatibility
  messages?: Message[];
}

export interface AIResponseFormatParams {
  responseFormat?: string;
}

export interface AIContextParams {
  mode: PROMPT_MODE;
  prompt: string;
}

export interface AIKnowledgeContextParams {
  mode: PROMPT_MODE;
  prompt: string;
  instruction?: string;
}

export interface AIKnowledgeParams {
  // make it optional for backward compatibility
  source?: DATA_SOURCE;
}

export enum Role {
  SYSTEM = 'system',
  ASSISTANT = 'assistant',
  USER = 'user',
}

export interface Message {
  role: Role;
  content: string;
}
