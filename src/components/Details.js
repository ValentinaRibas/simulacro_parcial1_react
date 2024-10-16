import React from "react";
import 'bulma/css/bulma.min.css';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";

function Details({ state }) {
    const { id } = useParams();
    const game = state.games.find((p) => p.id === id);

    return(
        <div data-theme="light">
            <div style={{flexDirection: "row", display: "flex", padding: "20px"}}>
                <Link to={`/`}><Button className="button">Atrás</Button></Link>
            </div>
            <div  style={{ paddingTop: "10px" }}>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <p className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Nombre: </p>
                    <p className="is-size-6 has-text-dark">{ game.title }</p>
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <p className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Descripción: </p>
                    <p className="is-size-6 has-text-dark">{ game.description }</p>
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <p className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Cantidad de jugadores: </p>
                    <p className="is-size-6 has-text-dark">{ game.players }</p>
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <p className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Categorías: </p>
                    <p className="is-size-6 has-text-dark">{ game.categories }</p>
                </div>
            </div>
        </div>
    );
}

export default Details;