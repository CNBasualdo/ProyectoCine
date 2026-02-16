import Salas from "../components/Salas";
import Cartelera from "../components/Cartelera";
import NavBar from "../components/NavBar";
import "../styles/Principal.css"

function Cine() {
    return (
        <div className="Cine">
            <NavBar />
            <Cartelera />
            <Salas />
        </div>
    );
}

export default Cine;
