import { baseURL } from "../Api/baseUrl"
export const useGetData = async (url, params) => {
    const res = await baseURL.get(url, params);
    return res.data
}
export const useGetDataByToken=async(url)=>{
    const config={
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    }
    const res=await baseURL.get(url,config)
    return res
}