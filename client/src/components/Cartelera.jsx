import { useEffect, useState } from "react";
import { getAllPeliculas } from "../api/peliculas.api";
import "../styles/cartelera.css";

function Cartelera() {
    const [indexActual, setIndexActual] = useState(0);
    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllPeliculas()
            .then((res) => {
                setPeliculas(res.data.results);
            })
            .catch(() => {
                setError("error al cargar peliculas");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    const peliculasVisibles = 4;

    useEffect(() => {
        if (peliculas.length === 0) return;

        const interval = setInterval(() => {
            setIndexActual((prev) =>
                prev >= peliculas.length - peliculasVisibles ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [peliculas]);

    return (
        <div className='container-fluid'>
            <div className='cartelera'>
                <div className='peliculas' style={{transform: `translateX(-${indexActual * 25}%)`}}>
                    {peliculas.map((peli) => (
                        <div key={peli.id} className='pelicula'>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
                                alt={peli.title}
                            />
                            <h2>{peli.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cartelera;
