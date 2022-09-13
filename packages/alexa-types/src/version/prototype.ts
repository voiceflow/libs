import { PermissionType } from '@alexa-types/node';
import { Product } from '@alexa-types/project';

import { InterfaceType } from '../constants';

/**
 * Stores survey results in Alexa projects
 */
export interface AlexaSurveyContextExtension {
  products: Record<string, Product>;
  permissions: PermissionType[];
  interfaces: InterfaceType[];
}
