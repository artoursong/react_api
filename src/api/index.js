import axios from "axios"

const defaultInstance = {
    baseURL: "http://127.0.0.1:8000/api"
};

const API = axios.create(defaultInstance);

export { API };