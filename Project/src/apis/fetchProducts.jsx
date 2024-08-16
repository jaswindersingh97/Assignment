import axios from 'axios';
// import { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

const BASE_URL = 'https://Real-Time-Product-Search.proxy-production.allthingsdev.co/v1/search';
const API_KEY = import.meta.env.VITE_API_KEY;
const fetchProducts = async (searchQuery) => {
    // const {searchQuery}=useContext(AppContext);
    // console.log(searchQuery,API_KEY)
    try {
        const { data } = await axios.get(BASE_URL, {
            headers: { 
                'x-apihub-key': API_KEY , 
                'x-apihub-host': 'Real-Time-Product-Search.allthingsdev.co', 
                'x-apihub-endpoint': '48cf011e-36c4-45a7-84a6-656a338a49ec'
            },
            params: {
                q: searchQuery,
                country: 'us',
                // language: 'en',
                limit: 16,
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
