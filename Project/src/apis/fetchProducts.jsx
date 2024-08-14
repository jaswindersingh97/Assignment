import axios from 'axios';

const BASE_URL = 'https://Real-Time-Product-Search.proxy-production.allthingsdev.co/v1/search';
const API_KEY = 'IG-PtsIf6ojEl0BXvth0aR9kve85K6lJ0oFDyi3ZM3EDMdhs0v';

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
                // language: 'en',
                limit: 9,
                // sort_by: 'BEST_MATCH',
                // product_condition: 'ANY',
                // min_rating: 'ANY',
                // page: 1,
                // min_price: 100,
                // max_price: 5000,
            },
        });
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export default fetchProducts;
