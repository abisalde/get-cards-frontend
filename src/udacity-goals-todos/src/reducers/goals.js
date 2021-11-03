import { ADD_GOAL, REMOVE_GOAL } from '../actions/goals';
import { RECEIVE_DATA } from '../actions/shared';

const goals = (state = [], action) => {
    if (action.type === ADD_GOAL) {
        return state.concat([action.goal]);
    } else if (action.type === REMOVE_GOAL) {
        return state.filter((goal) => goal.id !== action.id);
    } else if (action.type === RECEIVE_DATA) {
        return action.goals;
    } else {
        return state;
    }
};

export default goals;
