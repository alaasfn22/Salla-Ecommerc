import { baseURL } from "../Api/baseUrl"

export const useUpdateData=async(url,params)=>{
    const config={
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    }
    const res=await baseURL.put(url,params,config)
    return res
}