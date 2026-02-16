import { useEffect } from "react";
import {getAllSalas} from "../api/salas.api";

function Salas() {
    useEffect(() => {
        async function cargarSalas() {
            const res = await getAllSalas();
            console.log(res);
        }
        cargarSalas();
    }, []);

    return <h1>Todas lass Salas</h1>;
}

export default Salas;
