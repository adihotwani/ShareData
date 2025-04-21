import axios from "axios"

const API_BASE = 'https://api.escuelajs.co/api/v1';

export const products = async () => {
    const { data } = await axios.get(`${API_BASE}/products`);
    return data;
}

export const fetchProductById = async (id: number) => {
    const { data } = await axios.get(`${API_BASE}/products/${id}`);
    return data;
};

export const fetchCategories = async () => {
    const { data } = await axios.get(`${API_BASE}/categories`);
    return data;
};

export const fetchRelatedProducts = async (categoryId: number) => {
    const { data } = await axios.get(`${API_BASE}/categories/${categoryId}/products`);
    return data;
};