import type { PermissionType } from '@alexa-types/node';
import type { Product } from '@alexa-types/project';

import type { InterfaceType } from '../constants';

/**
 * Stores survey results in Alexa projects
 */
export interface AlexaSurveyContextExtension {
  products: Record<string, Product>;
  permissions: PermissionType[];
  interfaces: InterfaceType[];
}
