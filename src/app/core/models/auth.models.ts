// src/app/core/models/auth.models.ts
export interface LoginRequest {
  username: string;
  email: string;
}

export interface RegisterRequest {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterResponse {
  message: string;
}
