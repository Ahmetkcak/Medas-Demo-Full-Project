import { instance as axios } from "./axiosInstance";


export const addIntern = (data) => axios.post("interns", data);
export const getInterns = async (pageIndex, pageSize) => {
    return axios.get(`interns?pageIndex=${pageIndex}&pageSize=${pageSize}`);
};
export const getIntern = async (id) => {
    return axios.get(`interns/${id}`);
};
