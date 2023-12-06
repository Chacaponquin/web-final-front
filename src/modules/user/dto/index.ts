export interface CreateUserDTO {
  username: string;
  email: string;
  role_id: number;
}

export interface LoginUserDTO {
  username: string;
  password: string;
}
