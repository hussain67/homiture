import axios from "axios";
const productionUrl = "https://strapi-store-server.onrender.com/api";

export const axiosInstance = axios.create({
	baseURL: productionUrl
});
