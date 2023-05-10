import { API } from "./index";

const authService = {
    login: (userData) => {
        return API.post("auth/login", userData);
    }
}