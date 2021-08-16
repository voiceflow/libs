/* eslint-disable camelcase, @typescript-eslint/no-empty-interface */

import { v1 } from 'ask-smapi-model';

export interface AmazonProfile {
  name: string;
  email: string;
  user_id: string;
}

export interface AmazonVendor extends Required<v1.vendorManagement.Vendor> {}
