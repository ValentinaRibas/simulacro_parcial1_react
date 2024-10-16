import { actionsTypes } from "./Reducers";

const apiUrl = 'http://localhost:3000/api/games';

const fetchGames = async ( dispatch ) => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    dispatch({
        type: actionsTypes.SET_GAMES,
        payload: data
    });
};

const deleteGame = async ( dispatch, gameId ) => {
    const response = await fetch(apiUrl + `/${gameId}`, {
        method: 'DELETE'
    });
    if(response.ok){
        dispatch({
            type: actionsTypes.DELETE_GAME,
            payload: {id: gameId}
        });
    }
};

const addGame = async ( dispatch, game ) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    });
    const data = await response.json();
    console.log(data);
    dispatch({
        type: actionsTypes.ADD_GAME,
        payload: data
    });
};

export { fetchGames, deleteGame, addGame };