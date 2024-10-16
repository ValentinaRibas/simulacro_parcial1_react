const initialState = {
    games: [],
    showGameModal: false
};

const actionsTypes = {
    SET_GAMES: 'SET_GAMES',
    ADD_GAME: 'ADD_GAME',
    DELETE_GAME: 'DELETE_GAME'
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionsTypes.SET_GAMES:
            return {
                ...state,
                games: action.payload
            };
        case actionsTypes.ADD_GAME:
            return {
                ...state,
                games: [...state.games, action.payload]
            };
        case actionsTypes.DELETE_GAME:
            return {
                ...state,
                games: state.games.filter(task => task.id !== action.payload.id)
            }
        default:
            return state;
    }
};

export { initialState, actionsTypes, reducer };