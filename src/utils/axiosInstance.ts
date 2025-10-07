import axios from "axios";
const productionUrl = "https://strapi-store-server.onrender.com/api";

export const axiosInstance = axios.create({
	baseURL: productionUrl
});

// Add a request interceptor to automatically attach JWT
// axiosInstance.interceptors.request.use(
// 	config => {
// 		const { user } = useAppSelector(state => state.userState);

// 		if (user?.jwt) {
// 			config.headers.Authorization = `Bearer ${user.jwt}`;
// 		}
// 		return config;
// 	},
// 	error => {
// 		return Promise.reject(error);
// 	}
// );
