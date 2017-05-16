import { SET_TASKS } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_TASKS:
            const { tasks } = action;
            return tasks;
        default:
            return state;
    }
}