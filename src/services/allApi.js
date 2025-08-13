import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//api to register a user
export const registerApi = async(reqBody)=>{
    return await commonApi('POST' , `${serverUrl}/register` , reqBody)
}


//api to login a user
export const loginApi = async(reqBody)=>{
    return await commonApi('POST' , `${serverUrl}/login` , reqBody)
}


//api to add a book
export const addBookApi = async(reqBody , reqHeader)=>{
    return await commonApi('POST' , `${serverUrl}/add-book` , reqBody , reqHeader)
}


//api to get all books
export const getAllBooksApi = async()=>{
    return await commonApi('GET' , `${serverUrl}/view-allBooks`)
}


//api to view a single book
export const getABookApi = async(id)=>{
    return await commonApi('GET' , `${serverUrl}/view-Book/${id}`)
}


//api to add review
export const addReviewApi = async(id , reqBody , reqHeader)=>{
    return await commonApi('POST' , `${serverUrl}/add-review/${id}` , reqBody , reqHeader)
}

//api to get all review
export const getAllReviewApi = async(id)=>{
    return await commonApi('GET' , `${serverUrl}/view-review/${id}`)
}