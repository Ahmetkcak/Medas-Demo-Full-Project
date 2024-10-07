import { instance as axios } from "./axiosInstance";

export const registerUser = (data) => axios.post("auth/register", data);

export const loginUser = async (data) => {
    const response = await axios.post("/auth/login", data);
    
    if (response?.status === 200) {
        const { expirationDate, token } = response.data.accessToken;
        localStorage.setItem("access_token", token);
        localStorage.setItem("expiration_date", expirationDate);
    }

    return response;
} 

export const getFromAuth = () => axios.get("/Users/GetFromAuth");