export type Vendor = {
  vendorID: string;
  skillID: string; // reference id to external alexa skill
  // key: reference to project.platformData.products[i].productID
  // value:  relevant remote (in alexa) product id for this particular creator
  products: Record<string, string>;
};

export type AlexaProjectMemberData = {
  selectedVendor: null | string;
  vendors: Vendor[];
};

export const defaultAlexaProjectMemberData = ({
  selectedVendor = null,
  vendors = [],
}: Partial<AlexaProjectMemberData> = {}): AlexaProjectMemberData => ({
  selectedVendor,
  vendors,
});
