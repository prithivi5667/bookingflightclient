import axios from "axios";
export const axiosInstance= axios.create({
    baseURL:"https://flight-pt.herokuapp.com/"
})