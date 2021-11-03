import API from 'goals-todos-api';
// Action Types
export const RECEIVE_DATA = 'RECEIVE_DATA';

// Action Creators
const receiveData = (todos, goals) => {
    return {
        type: RECEIVE_DATA,
        todos,
        goals,
    };
};

export function handleReceiveData() {
    return (dispatch) => {
        return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
            ([todos, goals]) => {
                dispatch(receiveData(todos, goals));
            }
        );
    };
}
