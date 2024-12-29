import useSWR from 'swr';
import { getProducts, getProductById } from '../services/productService';

// API chaqiruvlarining umumiy funksiyasi
const fetchProducts = async () => {
    const response = await getProducts();
    return response.data;
};

const fetchProductById = async (id: string) => {
    const response = await getProductById(id);
    return response.data;
};

export const useSWRProductService = () => {
    const { data: products, error: productsError, isValidating: productsLoading } = useSWR('/products', fetchProducts);

    const { data: product, error: productError, isValidating: productLoading } = useSWR(
        (id: string) => `/product/${id}`,
        fetchProductById
    );

    return {
        products,
        product,
        productsLoading,
        productLoading,
        productsError,
        productError,
    };
};
