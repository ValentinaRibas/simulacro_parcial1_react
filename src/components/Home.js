import React from "react";
import 'bulma/css/bulma.min.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bulma-components';
import { useEffect, useState } from "react";
import { deleteGame, fetchGames } from '../reducers/Service';

function Home({state, dispatch}) {
    const [columns, setColumns] = useState([]);
    
    const loadGames = async () => {
        await fetchGames(dispatch);
    };

    const handleDelete = (id) => {
        deleteGame(dispatch, id);
    }

    useEffect(() => {
        loadGames();
    }, []);

    useEffect(() => {
        function renderGames() {
            const gameElements = state.games.map(game => (
                <div className="column is-one-third" key={game.id} style={{ display: "grid" }}>
                    <p className="subtitle is-6">{game.title}</p>
                    <Link to={`/game/${game.id}`} style={{ display: "grid" }}><Button className="button has-text-black">Detalles</Button></Link>
                    <Button className="button has-text-black" onClick={() => handleDelete(game.id)}>Borrar</Button>
                </div>
            ));
            setColumns(gameElements);
        }

        renderGames();
    }, [state.games]);

    return(
        <div data-theme="light" style={{display: "flex", flexDirection: "column"}} >
            <div style={{padding: "30px"}}>
                <p className="title">
                    Gestor de juegos
                </p>
            </div>
            <div style={{flexDirection: "row-reverse", display: "flex", padding: "30px"}}>
                <Link to={`/create`} ><Button className="button has-text-black is-responsive">Agregar juego</Button></Link>
            </div>
            <div class="table-container">
                <div className="columns" style={{padding: "20px"}}>
                    {columns}
                </div>
            </div>
        </div>
    );
}

export default Home;