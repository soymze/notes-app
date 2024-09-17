const initialState = {
    notes: []
};

function notesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.payload]  // Diziyi güncelle
            };
        default:
            return state;
    }
}

export default notesReducer;
