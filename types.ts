
export enum Profession {
  RESEARCH_SCHOLAR = 'Research Scholar',
  ACADEMICIAN_FACULTY = 'Academician/Faculty',
  OBSERVER = 'Observer',
  INDUSTRY_DELEGATES = 'Industry Delegates'
}

export interface RegistrationData {
  fullName: string;
  mobile: string;
  email: string;
  profession: Profession;
  idCardBase64?: string;
  amount: number;
  password?: string;
}

export interface RegistrationResult extends RegistrationData {
  registrationId: string;
  paymentId: string;
  paymentDate: string;
}

export interface AbstractData {
  registrationId: string;
  title: string;
  fileBase64: string;
  fileName: string;
}
