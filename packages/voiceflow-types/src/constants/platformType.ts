export enum PlatformType {
  ALEXA = 'alexa',
  GOOGLE = 'google',
  VOICEFLOW = 'general',
  DIALOGFLOW_ES = 'df-es',

  /** @deprecated use VOICEFLOW instead */
  IVR = 'ivr',
  /** @deprecated use VOICEFLOW instead */
  CHATBOT = 'chatbot',
  /** @deprecated use DIALOGFLOW_ES instead */
  DIALOGFLOW_ES_CHAT = 'dialogflow_es_chat',
  /** @deprecated use VOICEFLOW instead */
  DIALOGFLOW_ES_VOICE = 'dialogflow_es_voice',
  /** @deprecated use VOICEFLOW instead */
  GENERAL = 'general',
  /** @deprecated will be removed soon */
  MOBILE_APP = 'mobile_app',
}

export enum ProjectType {
  CHAT = 'chat',
  VOICE = 'voice',
}

export enum TTSPlatformType {
  ALEXA = 'alexa',
  AZURE = 'azure',
  GOOGLE = 'google',
}
