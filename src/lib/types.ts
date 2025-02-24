export type NavItem = {
  id: number;
  label: string;
  path: string;
};

export type TAvailableItem = {
  branchName: string;
  branchStreet: string;
  status: string;
  quantity: number;
};

export type TTag = {
  id: number;
  variant: "important" | "default";
  label: string;
};

export type TEventCard = {
  id: string;
  eventSlug: string;
  eventType: string;
  eventTargetGroup: string;
  eventTitle: string;
  eventDescription: string;
  eventMobileImageUrl: string;
  eventDesktopImageUrl: string;
  eventImageAlt: string;
  eventStartDate: Date;
  eventEndDate: Date | null;
  eventStartHour: string | null;
  branch: {
    branchName: string;
    branchAddressStreet: string;
  };
  eventTags: {
    id: string;
    tagVariant: string;
    tagDescription: string;
  }[];
};

export type TEventPage = {
  id: string;
  eventSlug: string;
  eventType: string;
  eventTargetGroup: string;
  eventTitle: string;
  eventDescription: string;
  eventImageAlt: string;
  eventDesktopImageUrl: string;
  eventStartDate: Date;
  eventEndDate: Date | null;
  eventStartHour: string | null;
  branch: {
    id: string;
    branchNumber: string;
    branchName: string;
    branchAddressStreet: string;
    branchGoogleMapLink: string;
  };
  eventTags: {
    id: string;
    tagVariant: string;
    tagDescription: string;
  }[];
};

export type TBranchCard = {
  id: string;
  branchSlug: string;
  branchImageUrl: string;
  branchImageAlt: string;
  branchNumber: string;
  branchName: string;
  branchAddressStreet: string;
  branchFacebookLink: string | null;
  branchInstagramLink: string | null;
  branchWebsiteLink: string | null;
  branchGoogleMapLink: string;
  branchAdaptedToDisabilities: boolean;
  branchOpeningHours: TBranchOpeningHours[];
};

export type TBranchOpeningHours = {
  day: string;
  isOpen: boolean;
  openTime: string | null;
  closeTime: string | null;
};

export type TBranchOfferItem = {
  id: string;
  text: string | null;
  linkText: string | null;
  linkUrl: string | null;
  subItems: TBranchOfferSubItem[];
};

export type TBranchOfferSubItem = {
  id: string;
  text: string | null;
  linkText: string | null;
  linkUrl: string | null;
};

export type TBranchMap = {
  id: string;
  branchName: string;
  branchNumber: string;
  branchLatitude: number;
  branchLongitude: number;
};

export type TNewsDescription = {
  id: string;
  title?: string | null;
  text?: string | null;
  linkText?: string | null;
  linkUrl?: string | null;
  imageUrl?: string | null;
  parentId?: string | null;
  newsId: string;
  createdAt: Date;
  updatedAt: Date;
  subItems?: TNewsDescription[];
};

export type TNewsItem = {
  id: string;
  newsSlug: string;
  newsTitle: string;
  newsDate: Date;
  newsMobileImageUrl: string;
  newsDesktopImageUrl: string;
  newsImageAlt: string;
  newsDescription: TNewsDescription[];
};

export type TCatalogItemCard = {
  id: string;
  catalogItemSlug: string;
  catalogItemType: string;
  catalogItemTitle: string;
  catalogItemImageUrl: string;
  catalogItemImageAlt: string;
  catalogItemGenre: string | null;
  catalogItemPublishDate: Date | null;
  catalogItemWidth: string;
  catalogItemHeight: string;
  CatalogItemAuthor: {
    authorId: string;
    catalogItemId: string;
  }[];
  CatalogItemPublisher: {
    publisherId: string;
    catalogItemId: string;
  }[];
  branches: {
    branchId: string;
    catalogItemId: string;
    catalogItemQuantity: number;
    branch: {
      branchName: string;
      branchAddressStreet: string;
    };
  }[];
  catalogItemParams: {
    id: string;
    catalogItemParamType: string;
    catalogItemParamName: string;
    catalogItemParamValue: {
      id: string;
      catalogItemParamValue: string;
      catalogItemParamLink: string | null;
      paramsId: string;
    }[];
  }[];
};

export type TCatalogItemParamValue = {
  id: string;
  catalogItemParamValue: string;
  catalogItemParamLink: string | null;
};

export type TCatalogItemParams = {
  id: string;
  catalogItemParamType: string;
  catalogItemParamName: string;
  catalogItemParamValue: TCatalogItemParamValue[];
}[];
