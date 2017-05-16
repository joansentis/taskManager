import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTaskRef, taskRef } from '../../firebase';

class TaskItem extends Component {
    completeTask() {
        const { email } = this.props.user;
        const { title, serverKey } = this.props.task;
        taskRef.child(serverKey).remove();
        completeTaskRef.push({ email, title });
    }
    deleteTask() {
        const { title, serverKey } = this.props.task;
        console.log(this.props.task);
        taskRef.child(serverKey).remove();
    }
    render() {
        const { email, title } = this.props.task;
        return (
            <div className="task-list-container">
                <div className="content">
                    <div className="task">
                        <strong>{title}</strong>
                    </div>
                    <div className="submited-by">
                        <span>Submited by <em>{email} </em></span>
                    </div>
                </div>
                <div className="actions">
                    <div className="icon complete" onClick={() => this.completeTask()}>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div className="icon delete" onClick={() => this.deleteTask()}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
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

export default connect(mapStateToProps, null)(TaskItem);