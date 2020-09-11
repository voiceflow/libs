import { ExpressionType } from '@/types';

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

export enum IntegrationType {
  ZAPIER = 'Zapier',
  CUSTOM_API = 'Custom API',
  GOOGLE_SHEETS = 'Google Sheets',
}

export enum IntegrationPlatform {
  ZAPIER = 'Zapier',
  GOOGLE_SHEETS = 'Google Sheets',
}

export type IntegrationUser = {
  user_id?: string;
  platform?: IntegrationPlatform;
  user_data?: { email?: string; name?: string };
  created_at?: string;
  creator_id?: number;
  project_id?: null | string;
  requires_refresh?: null | boolean;
  integration_user_id?: string;
};

export enum NodeType {
  SPEAK = 'speak',
  START = 'start',
  INTERACTION = 'interaction',

  // logic
  SET = 'set',
  IF = 'if',
  CAPTURE = 'capture',
  RANDOM = 'random',

  // integrations
  API = 'api',
  ZAPIER = 'zapier',
  INTEGRATIONS = 'integrations',
  GOOGLE_SHEETS = 'google_sheets',

  // advanced
  INTENT = 'intent',
  STREAM = 'stream',
  FLOW = 'flow',
  CODE = 'code',
  EXIT = 'exit',
  PROMPT = 'prompt',

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
}

export type GenericExpression<T extends ExpressionType, V> = {
  type: T;
  value: V;
  depth: number;
};

export type ExpressionTuple = [Expression, Expression];

// can't use generic here due to recursion type issue
export type NotExpression = { type: ExpressionType.NOT; value: Expression; depth: number };
export type OrExpression = GenericExpression<ExpressionType.OR, ExpressionTuple>;
export type AndExpression = GenericExpression<ExpressionType.AND, ExpressionTuple>;
export type LessExpression = GenericExpression<ExpressionType.LESS, ExpressionTuple>;
export type PlusExpression = GenericExpression<ExpressionType.PLUS, ExpressionTuple>;
export type MinusExpression = GenericExpression<ExpressionType.MINUS, ExpressionTuple>;
export type TimesExpression = GenericExpression<ExpressionType.TIMES, ExpressionTuple>;
export type ValueExpression = GenericExpression<ExpressionType.VALUE, string>;
export type DivideExpression = GenericExpression<ExpressionType.DIVIDE, ExpressionTuple>;
export type EqualsExpression = GenericExpression<ExpressionType.EQUALS, ExpressionTuple>;
export type GreaterExpression = GenericExpression<ExpressionType.GREATER, ExpressionTuple>;
export type AdvancedExpression = GenericExpression<ExpressionType.ADVANCE, string>;
export type VariableExpression = GenericExpression<ExpressionType.VARIABLE, string>;

export type Expression =
  | OrExpression
  | AndExpression
  | NotExpression
  | LessExpression
  | PlusExpression
  | MinusExpression
  | TimesExpression
  | ValueExpression
  | DivideExpression
  | EqualsExpression
  | GreaterExpression
  | AdvancedExpression
  | VariableExpression;
