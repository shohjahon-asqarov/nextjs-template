import apiClient from "@/lib/apiClient";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface CreateProductPayload {
  name: string;
  description: string;
  price: number;
}

export const getProducts = async (): Promise<Product[] | any> => {
  const response = await apiClient.get('/products');
  return response.data;
};

export const getProductById = async (id: string): Promise<Product | any> => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (payload: CreateProductPayload): Promise<Product> => {
  const response = await apiClient.post('/products', payload);
  return response.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await apiClient.delete(`/products/${id}`);
};
