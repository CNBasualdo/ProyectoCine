import axios from "axios";

export const getAllSalas = () => {
    return axios.get("http://127.0.0.1:8000/salas/api/v1/salas/");
};
