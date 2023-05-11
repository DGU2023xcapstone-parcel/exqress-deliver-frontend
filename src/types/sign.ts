export interface SignUpInputType {
  id: string;
  password: string;
  name: string;
  company: string;
  phone: string;
  email: string;
}

export interface SignInInputType {
  id: string;
  password: string;
}

export interface SignInOutputType {
  token: string;
}
