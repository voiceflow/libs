export type Vendor = {
  vendorID: string;
  skillID: string; // reference id to external alexa skill
  products: {
    productID: string; // reference to project.platformData.products[i].productID
    skillProductID: string; // relevant remote (in alexa) product id for this particular creator
  }[];
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
