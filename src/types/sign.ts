export type SignUpType = keyof SignUpInputType;

export type SignUpInputType = {
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
};

export type SignUpValidateType = {
  email: boolean;
  name: boolean;
  password: boolean;
  phoneNumber: boolean;
};

export type SignInInputType = {
  email: string;
  password: string;
};
