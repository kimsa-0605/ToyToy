export interface User {
  id: number;
  email: string;
  fullname: string;
  phone: string;
  avatar_link: string;
  province: string;
  district: string;
  detailed_address: string;
  role: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  changePasswordMessage: string,
}