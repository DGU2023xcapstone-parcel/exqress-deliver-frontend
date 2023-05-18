export type SignUpType = keyof SignUpInputType;

export interface SignUpInputType {
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
}

export interface SignUpValidateType {
  email: boolean;
  name: boolean;
  password: boolean;
  phoneNumber: boolean;
}

export interface SignInInputType {
  email: string;
  password: string;
}
