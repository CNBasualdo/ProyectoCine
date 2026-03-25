import axios from "axios";

export const getAsientos = (funcionId) =>{
    return axios.get(`http://127.0.0.1:8000/api/funciones/${funcionId}/asientos/`);
};