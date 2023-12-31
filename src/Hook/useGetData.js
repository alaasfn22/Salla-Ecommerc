import { baseURL } from "../Api/baseUrl"
export const useGetData = async (url, params) => {
    const res = await baseURL.get(url, params);
    return res.data
}