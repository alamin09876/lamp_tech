export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface LoginResponse {
  status: boolean;
  message: string;
  access_token: string;
  data: User;
}
export interface SignUpPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface SignUpResponse {
  status: boolean;
  message: string;
}
