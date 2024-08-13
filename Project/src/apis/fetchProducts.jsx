import axios from 'axios';

const BASE_URL = 'https://Real-Time-Product-Search.proxy-production.allthingsdev.co/v1/search';
const API_KEY = 'XAI8l0DLvhoK4rkYDvrzQBqaZJEuUXHc4aXh-aXln6bKTn-mDa';

const fetchProducts = async () => {
    try {
        const { data } = await axios.get(BASE_URL, {
            headers: { 
                'x-apihub-key': API_KEY, 
                'x-apihub-host': 'Real-Time-Product-Search.allthingsdev.co', 
                'x-apihub-endpoint': '48cf011e-36c4-45a7-84a6-656a338a49ec'
            },
            params: {
                q: 'Nike shoes',
                country: 'us',
                language: 'en',
                limit: 30,
                sort_by: 'BEST_MATCH',
                product_condition: 'ANY',
                min_rating: 'ANY',
                page: 1,
                min_price: 100,
                max_price: 195,
                free_returns: 'Do not include in request',
                free_shipping: 'Do not include in request',
                max_shipping_days: null,
                on_sale: 'Do not include in request',
                store_id: null,
                other_filters: null
            },
        });
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default fetchProducts;
