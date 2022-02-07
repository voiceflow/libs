import { BaseProject, Nullable } from '@voiceflow/base-types';

export interface Vendor {
  skillID: string; // reference id to external alexa skill
  vendorID: string;

  // key: reference to project.platformData.products[i].productID
  // value:  relevant remote (in alexa) product id for this particular creator
  products: Record<string, string>;
}

export interface MemberPlatformData extends BaseProject.MemberPlatformData {
  vendors: Vendor[];
  selectedVendor: Nullable<string>;
}

export const defaultMemberPlatformData = ({ vendors = [], selectedVendor = null }: Partial<MemberPlatformData> = {}): MemberPlatformData => ({
  vendors,
  selectedVendor,
});
