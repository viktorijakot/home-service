export interface User {
  _id: string;
  name: string;
  age?: string;
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  token: string;
  user: User;
}

export interface RegisterUser {
  name: string;
  age?: number;
  email: string;
  password: string;
  repeatPassword: string;
}
