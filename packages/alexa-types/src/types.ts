/* eslint-disable camelcase */

import { v1 } from 'ask-smapi-model';

export interface AmazonProfile {
  name: string;
  email: string;
  user_id: string;
}

export type AmazonVendor = Required<v1.vendorManagement.Vendor>;
