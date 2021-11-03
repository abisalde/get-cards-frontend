import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todos';
import { RECEIVE_DATA } from '../actions/shared';

const todos = (state = [], action) => {
    if (action.type === ADD_TODO) {
        return state.concat([action.todo]);
    } else if (action.type === REMOVE_TODO) {
        return state.filter((todo) => todo.id !== action.id);
    } else if (action.type === TOGGLE_TODO) {
        return state.map((todo) => {
            if (todo.id === action.id) {
                return Object.assign({}, todo, {
                    complete: !todo.complete,
                });
            } else {
                return todo;
            }
        });
    } else if (action.type === RECEIVE_DATA) {
        return action.todos;
    } else {
        return state;
    }
};

export default todos;
