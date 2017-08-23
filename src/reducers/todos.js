const initialState = [
    {
        id: 1,
        description: 'Create an App'
    },
    {
        id: 2,
        description: 'Have a rest'
    },
    {
        id: 3,
        description: 'Go back to work'
    }
];

export default function(state=initialState, action) {
    switch (action.type) {
        case 'SAVE_TODO':
            return state.map((todo) => {
                if (todo.id === Number(action.payload.id)) {
                    todo.description = action.payload.input
                }
                return todo;
            });
        default:
            return state;
    }
}