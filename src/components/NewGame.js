import React from "react";
import 'bulma/css/bulma.min.css';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button, Form } from "react-bulma-components";
import { useState } from "react";
import { addGame } from "../reducers/Service";
import { message } from 'react-message-popup'

function NewGame({ dispatch }) {
    const [title, setName] = useState('');
    const [description, setDescription] = useState('');
    const [players, setQuantity] = useState(0);
    const [categories, setCategory] = useState('');

    const handleSubmit = async  () => {
        const game = {
            title,
            description,
            players,
            categories
        };

        await addGame(dispatch, game);
        message.info("Se ha creado el juego correctamente!");
    };

    return(
        <div data-theme="light">
            <div style={{flexDirection: "row", display: "flex", padding: "20px"}}>
                <Link to={`/`}><Button className="button is-text has-text-black is-responsive">Atrás</Button></Link>
            </div>
            <form style={{ paddingTop: "10px" }}>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <label className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Nombre: </label>
                    <input type="text" value={title} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <label className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Descripción: </label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" />
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <label className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Cantidad de jugadores: </label>
                    <input type="number" value={players} onChange={(e) => setQuantity(e.target.value)} placeholder="Cantidad" />
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <label className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Categorías: </label>
                    <input type="text" value={categories} onChange={(e) => setCategory(e.target.value)} placeholder="Categorías" />
                </div>
            </form>
            <div style={{flexDirection: "row", display: "flex", padding: "20px"}}>
                <Button className="button has-text-black is-responsive" onClick={() => handleSubmit()}>Guardar</Button>
            </div>
        </div>
    );
}

export default NewGame;