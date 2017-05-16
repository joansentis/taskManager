import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../../actions';
import { completeTaskRef } from '../../firebase';

class CompleteTaskList extends Component {
    componentDidMount() {
        completeTaskRef.on('value', snap => {
            let completeTasks = [];
            snap.forEach(completeTask => {
                const { email, title } = completeTask.val();
                completeTasks.push({ email, title })
            })
            this.props.setCompleted(completeTasks);
        })
    }
    clearCompleted(ind) {
        this.props.completeTasks.splice(ind, 1)
        completeTaskRef.set(this.props.completeTasks);
    }
    render() {
        return (
            <div>
                {
                    this.props.completeTasks.length > 0 ?
                        <div className="completed-task-container">
                            <h3>Completed Tasks</h3>
                            <div className="completed-task-content">
                                {
                                    this.props.completeTasks.map((completeTask, ind) => {
                                        const { title, email } = completeTask;
                                        return (
                                            <div className="completed-task-card" key={ind}>
                                                <div className="task">
                                                    <strong>{title}</strong>
                                                </div>
                                                <div className="submited-by">
                                                    <span>Submited by <em>{email} </em></span>
                                                </div>
                                                <div className="actions">
                                                    <div className="icon delete" onClick={() => this.clearCompleted(ind)}>
                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        : ''

                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { completeTasks } = state;
    return {
        completeTasks
    }
}

export default connect(mapStateToProps, { setCompleted })(CompleteTaskList);