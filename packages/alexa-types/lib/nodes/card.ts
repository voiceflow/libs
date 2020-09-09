import { DefaultNode, DefaultStep, NodeType } from './types';

/**
 * Related Amazon documentation for Cards.
 *
 * https://developer.amazon.com/en-US/docs/alexa/custom-skills/include-a-card-in-your-skills-response.html
 * https://developer.amazon.com/en-US/docs/alexa/custom-skills/request-customer-contact-information-for-use-in-your-skill.html#permissions-card-for-requesting-customer-consent
 */

/* ----------------------- Alexa Skill Constants ----------------------- */

export enum CardType {
  SIMPLE = 'Simple',
  STANDARD = 'Standard',
  LINK = 'LinkAccount',
  PERMISSIONS = 'AskForPermissionsConsent',
}

export enum AlexaPermissions {
  GRANT_FULL_NAME = 'alexa::profile:name:read',
  GRANT_FIRST_NAME = 'alexa::profile:given_name:read',
  GRANT_EMAIL = 'alexa::profile:email:read',
  GRANT_PHONE_NUMBER = 'alexa::profile:mobile_number:read',
}

/* ----------------------- Alexa Card Types ----------------------- */

export type Card = {
  type: CardType;
  title: string;
  text: string;
  image: {
    largeImageUrl?: string;
    smallImageUrl?: string;
  };
};

/* ----------------------- Voiceflow Data Types ----------------------- */

export type StepData = Card;

export type NodeData = {
  card: Card;
  nextId?: string;
};

export type Step = DefaultStep<NodeType.CARD, StepData>;
export type Node = DefaultNode<NodeType.CARD, NodeData>;
