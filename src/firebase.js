import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCIrmEiAHzvbWgMZzF3ULb5sFoBAlPmxXM",
    authDomain: "task-manger.firebaseapp.com",
    databaseURL: "https://task-manger.firebaseio.com",
    storageBucket: "task-manger.appspot.com",
    messagingSenderId: "861815604842"
};

export const firebaseApp = firebase.initializeApp(config);
export const taskRef = firebase.database().ref('tasks');
export const completeTaskRef = firebase.database().ref('completeTasks');