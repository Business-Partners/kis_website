export const InstitutionSize = {
  TINY: "TINY",
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  BIG: "BIG",
  VERYBIG: "VERYBIG",
  EXTRABIG: "EXTRABIG",
};

export interface Contacts {
  phone: string;
  alternativePhone: string;
  email: string;
}

export interface InstitutionData {
  name: string;
  description?: string;
  nifNumber: string;
  avatarUrl?: string;
  size: string;
}

export interface InstitutionContact {
  content: string;
  contactTypeId: string;
}

export interface InstitutionAddress {
  address: string;
  country?: string;
  province: string;
  state: string;
  county?: string;
  neighborhood?: string;
}

export interface InstitutionAllData {
  institutionData: InstitutionData;
  institutionContacts: InstitutionContact[];
  instituionAddress?: InstitutionAddress;
}
