export interface LogInPayload {
  email: string;
  password: string;
}

export interface LogInState {
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}