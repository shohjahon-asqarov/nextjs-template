
import apiClient from "@/lib/apiClient";

interface LoginPayload {
  email: string;
  password: string;
}

interface SignUpPayload {
  name: string;
  email: string;
  password: string;
}

// Login
export const login = async (payload: LoginPayload) => {
  const response = await apiClient.post('/auth/login', payload);
  localStorage.setItem('token', response.data.token); // Tokenni saqlash
  return response.data;
};

// Sign up
export const signUp = async (payload: SignUpPayload) => {
  const response = await apiClient.post('/auth/signup', payload);
  return response.data;
};

// Log out
export const logout = () => {
  localStorage.removeItem('token'); // Tokenni o'chirish
};
