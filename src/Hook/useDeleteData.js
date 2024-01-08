import { baseURL } from "../Api/baseUrl"
export const useDeleteData = async (url, params) => {
    const res = await baseURL.delete(url, params);
    return res.data
}
export const useDeleteDataByToken=async(url,params)=>{
    const config={
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    }
    const res=await baseURL.delete(url,config,params)
    return res
}