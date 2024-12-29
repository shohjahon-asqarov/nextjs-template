// config/index.ts

export const API_CONFIG = {
    BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://default-api-url.com',
    TIMEOUT: 5000, // API so'rovining timeout muddati
};

export const AUTH_CONFIG = {
    LOGIN_URL: '/auth/login',
    SIGNUP_URL: '/auth/signup',
};
