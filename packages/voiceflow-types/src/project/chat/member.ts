import { ChatProject } from '@voiceflow/chat-types';

// data shared across all platforms which extend voiceflow-chat type
export interface SharedChatMemberPlatformData extends ChatProject.MemberPlatformData {}

// voiceflow-chat only data
export interface ChatMemberPlatformData extends SharedChatMemberPlatformData {}
