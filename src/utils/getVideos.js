import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    method: 'GET',
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APY_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
export const getVideos = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data
    } catch (error) {
        console.error(error);
    }
}
