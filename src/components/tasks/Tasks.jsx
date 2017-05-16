import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../../firebase';
import AddTask from './AddTask';
import TaskList from './TaskList';
import CompleteTaskList from './CompleteTaskList';

import './Tasks.scss';

class Tasks extends Component {
    signOut() {
        firebaseApp.auth().signOut();
    }
    render() {
        return (
            <div className="tasks-container">
                <div className="tasks-header-container">
                    <div className="tasks-header-content">
                        <div className="logo">
                            <h3>Task Manager</h3>
                        </div>
                        <div className="sign-out" onClick={() => this.signOut()} >
                            <i className="fa fa-power-off" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="tasks-content">
                    <div className="add-task">
                        <AddTask />
                    </div>
                    <div className="task-list">
                        <TaskList />
                    </div>
                    <div className="completed-tasks">
                        <CompleteTaskList />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    };

}

export default connect(mapStateToProps, null)(Tasks);