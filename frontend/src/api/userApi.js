import axios from "axios";

const BASE_URL = "http://localhost:8080/api/users";

export const getUserList = () => axios.get(BASE_URL);

export const createUser = async(userData) => {
    return axios.post(BASE_URL, userData, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const getUser = async(id) => {
    console.log("GET USER: ", `${BASE_URL}/${id}`)
    return axios.get(`${BASE_URL}/${id}`);
};