export const saveTodo = (todo) => {
    return {
        type: 'SAVE_TODO',
        payload: todo
    }
};