import axios from "axios";

const tmdb = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,

    params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_ACCESS_KEY,
        language: "ru-RU",
    },
});

export default tmdb;