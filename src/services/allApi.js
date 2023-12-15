import AddProject from "../components/AddProject"
import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

//registration api

export const registerAPI = async(user)=>{
    return await commonAPI('POST',`${BASE_URL}/user/register`,user,"")
}
export const loginAPI = async(ldata)=>{
    return await commonAPI('POST',`${BASE_URL}/user/login`,ldata,"")
}

//add project 
export const AddProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${BASE_URL}projects/add`,reqBody,reqHeader)
}


