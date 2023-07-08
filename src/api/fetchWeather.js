import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "82ab0715db49db06551af791e32a518e";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metrics",
            APPID: API_KEY
        }
    });

    return data;
}