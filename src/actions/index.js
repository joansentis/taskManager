import { SIGNED_IN, SET_TASKS, SET_COMPLETED } from '../constants';

export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export function setTasks(tasks) {
    const action = {
        type: SET_TASKS,
        tasks
    }
    return action;
}

export function setCompleted(completeTasks) {
    const action = {
        type: SET_COMPLETED,
        completeTasks
    }
    return action
}