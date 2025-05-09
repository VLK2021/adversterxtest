import {axiosService} from "./axios.service.jsx";
import urls from "../constants/urls.jsx";


export const userService = {
    getAll: () => axiosService.get(urls.users)
        .then(value => value.data),
}