import axios from 'axios';

const API_URL = 'http://localhost:37209/api/products';

const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the products!', error);
        throw error;
    }
};

const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`There was an error fetching the product with id ${id}!`, error);
        throw error;
    }
};

export default {
    getProducts,
    getProductById
};
