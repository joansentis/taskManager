import { SET_COMPLETED } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_COMPLETED:
            const { completeTasks } = action;
            return completeTasks;
        default:
            return state;
    }
}