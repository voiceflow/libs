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

type BaseCardData<T extends CardType> = {
  cardType: T;
};

type AccountLinkCardData = BaseCardData<CardType.LINK>;

type AskForPermissionsConsentCardData = BaseCardData<CardType.PERMISSIONS> & {
  permissions: Array<AlexaPermissions>;
};

type SimpleCardData<T extends CardType = CardType.SIMPLE> = BaseCardData<T> & {
  title: string;
  text: string;
};

type StandardCardData = SimpleCardData<CardType.STANDARD> & {
  largeImageUrl: null | string;
  smallImageUrl: null | string;
};

/* ----------------------- Voiceflow Data Types ----------------------- */

export type StepData = StandardCardData | SimpleCardData | AccountLinkCardData | AskForPermissionsConsentCardData;

export type NodeData = {
  card: {
    type: CardType;
    title: string;
    text: string;
    image: {
      largeImageUrl: string;
      smallImageUrl: string;
    };
  };
  nextId?: string;
};

export type Step = DefaultStep<NodeType.CARD, StepData>;
export type Node = DefaultNode<NodeType.CARD, NodeData>;
