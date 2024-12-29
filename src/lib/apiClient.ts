import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Har bir so'rov oldidan token qo'shish (agar mavjud bo'lsa)
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Xatolarni ushlash
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Agar 401 xatolik bo'lsa (avtorizatsiya muammosi), foydalanuvchini logout qilish
    if (error.response?.status === 401) {
      console.error('Not authorized. Redirecting to login...');
      // Logout yoki login sahifasiga yo'naltirish
    }
    return Promise.reject(error);
  }
);

export default apiClient;
