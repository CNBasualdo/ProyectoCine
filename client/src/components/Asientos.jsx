import { useEffect, useState } from "react";
import { getAsientos } from "../api/salas.api";
import "../styles/asientos.css"


function Asientos({ funcionId }) {
    const [asientos, setAsientos] = useState([]);

    useEffect(() => {
        if (!funcionId) return;
        getAsientos(funcionId)
            .then((res) => {
                setAsientos(res.data);
            })
            .catch((error) => {
                console.error("Error cargando asientos", error);
            });
    }, [funcionId]);

    if (!funcionId) {
        return <p>Seleciona una funcion</p>;
    }

    return (
        <div className="Sala">
            <h2>Sala</h2>
            <div className="grid">
            {asientos.map((a) => (
                <div key={a.id} className={`asiento ${a.reservado ? "ocupado":"libre"}`}>
                    {a.fila}-{a.columna}
                </div>
            ))}
        </div>
        </div>
    );
}

export default Asientos;
