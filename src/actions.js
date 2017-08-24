export const saveTodo = (todo) => {
    return {
        type: 'SAVE_TODO',
        payload: todo
    }
};

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
};