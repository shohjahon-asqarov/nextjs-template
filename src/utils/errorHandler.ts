export const handleError = (error: any): string => {
    if (error.response) {
      // Server xatosi (4xx, 5xx)
      return error.response.data?.message || 'Server error';
    }
    if (error.request) {
      // So'rov yuborilgan, lekin javob olinmagan
      return 'Network error. Please try again later';
    }
    return 'An unknown error occurred';
  };
  