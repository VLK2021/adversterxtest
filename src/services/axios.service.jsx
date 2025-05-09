import axios from "axios";

import baseURL from "../constants/baseURL.jsx";


export const axiosService = axios.create({baseURL});