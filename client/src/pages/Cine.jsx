import Funciones from "../components/Funciones";
import Cartelera from "../components/Cartelera";
import NavBar from "../components/NavBar";
import Asientos from "../components/Asientos";
import "../styles/Principal.css"
import { useState } from "react";

function Cine() {

    const [funcionId, setFuncionId]= useState(null)


    return (
        <div className="Cine">
            <NavBar />
            <Cartelera />
            <Funciones seleccionarFuncion={setFuncionId}  />
            <Asientos funcionId={funcionId}/>
        </div>
    );
}

export default Cine;
