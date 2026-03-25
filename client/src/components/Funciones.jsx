import { useEffect, useState } from "react";
import "../styles/funciones.css"
import { getFunciones } from "../api/funciones.api.js";

function Funciones({seleccionarFuncion}) {
    const [funciones, setFunciones] = useState([]);

    useEffect(() => {
        getFunciones()
            .then((res) => {
                setFunciones(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="funciones">
            <h2>Funciones</h2>
            {funciones.map((f) => (
                <div key={f.id}>
                    <p>pelicula id:{f.pelicula_id}</p>
                    <p>sala :{f.sala}</p>
                    <p>horario: {new Date(f.horario).toLocaleString()}</p>

                    <button onClick={()=>seleccionarFuncion(f.id)}>Ver Asientos</button>
                </div>

            ))}
        </div>
    );
}

export default Funciones;
