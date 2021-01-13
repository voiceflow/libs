export { Step as DefaultStep, Node as DefaultNode, Command as DefaultCommand } from '@voiceflow/api-sdk';

export enum PermissionType {
  AVS_DISTRIBUTED_AUDIO = 'avs::distributed_audio',
  ALEXA_ASYNC_EVENT_WRITE = 'alexa::async_event:write',
  PAYMENTS_AUTO_PAY_CONSENT = 'payments:autopay_consent',

  ALEXA_DEVICE_ID_READ = 'alexa::device_id:read',
  ALEXA_DEVICE_TYPE_READ = 'alexa::device_type:read',

  ALEXA_DEVICES_ALL_GEOLOCATION_READ = 'alexa::devices:all:geolocation:read',
  ALEXA_DEVICES_ALL_ADDRESS_FULL_READ = 'alexa::devices:all:address:full:read',
  ALEXA_DEVICES_ALL_NOTIFICATIONS_WRITE = 'alexa::devices:all:notifications:write',
  ALEXA_DEVICES_ALL_NOTIFICATIONS_URGENT_WRITE = 'alexa::devices:all:notifications:urgent:write',
  ALEXA_DEVICES_ALL_ADDRESS_COUNTY_AND_POSTAL_CODE_READ = 'alexa:devices:all:address:country_and_postal_code:read',

  ALEXA_HOUSEHOLD_LISTS_READ = 'alexa::household:lists:read',
  ALEXA_HOUSEHOLD_LISTS_WRITE = 'alexa::household:lists:write',

  ALEXA_PERSONALITY_EXPLICIT_READ = 'alexa::personality:explicit:read',
  ALEXA_PERSONALITY_EXPLICIT_WRITE = 'alexa::personality:explicit:write',

  ALEXA_PROFILE_NAME_READ = 'alexa::profile:name:read',
  ALEXA_PROFILE_EMAIL_READ = 'alexa::profile:email:read',
  ALEXA_PROFILE_MOBILE_NUMBER_READ = 'alexa::profile:mobile_number:read',
  ALEXA_PROFILE_GIVEN_NAME_READ = 'alexa::profile:given_name:read',

  ALEXA_ALERTS_REMINDERS_SKILL_READ_WRITE = 'alexa::alerts:reminders:skill:readwrite',
  ALEXA_ALERTS_TIMERS_SKILL_READ_WRITE = 'alexa::alerts:timers:skill:readwrite',

  ALEXA_SKILL_CDS_MONETIZATION = 'alexa::skill:cds:monetization',
  ALEXA_SKILL_PRODUCTS_ENTITLEMENTS = 'alexa::skill:products:entitlements',
  ALEXA_SKILL_PROACTIVE_ENABLEMENT = 'alexa::skill:proactive_enablement',

  ALEXA_AUTHENTICATE_2_MANDATORY = 'alexa::authenticate:2:mandatory',
  ALEXA_AUTHENTICATE_2_OPTIONAL = 'alexa::authenticate:2:optional',

  ALEXA_MUSIC_CAST = 'alexa::music:cast',
  ALEXA_PERSON_ID_READ = 'alexa::person_id:read',
  ALEXA_CUSTOMER_ID_READ = 'alexa::customer_id:read',
  ALEXA_UTTERANCE_ID_READ = 'alexa::utterance_id:read',
  ALEXA_RAW_PERSON_ID_READ = 'alexa::raw_person_id:read',
  ALEXA_HEALTH_PROFILE_WRITE = 'alexa::health:profile:write',
  ALEXA_USER_EXPERIENCE_GUIDANCE_READ = 'alexa::user_experience_guidance:read',

  UNOFFICIAL_ISP = 'UNOFFICIAL::isp',
  UNOFFICIAL_PRODUCT = 'UNOFFICIAL::product',
  UNOFFICIAL_ACCOUNT_LINKING = 'UNOFFICIAL::account_linking',
}

export enum NodeType {
  // visuals
  CARD = 'card',
  DISPLAY = 'display',

  // user
  PERMISSION = 'permission',
  ACCOUNT_LINKING = 'account_linking',
  USER_INFO = 'user_info',
  PAYMENT = 'payment',
  CANCEL_PAYMENT = 'cancel_payment',
  REMINDER = 'reminder',
  DEPRECATED = 'deprecated',

  // event
  DIRECTIVE = 'directive',
  EVENT = 'event',

  // request
  COMMAND = 'command',
  INTENT = 'intent',
  INTERACTION = 'interaction',
  CAPTURE = 'capture',
}
