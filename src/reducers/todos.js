const initialState = [
    {
        id: 1,
        description: 'Create an App'
    },
    {
        id: 2,
        description: 'Have a rest'
    }
];

export default function(state=initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}