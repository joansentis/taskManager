import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskRef } from '../../firebase';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    addTask() {
        const { title } = this.state;
        const { email } = this.props.user;
        taskRef.push({ email, title });
    }
    render() {
        return (
            <div className="add-task">
                <div className="input-group">
                    <input type="text" placeholder="Add a task" className="form-control" onKeyPress={event => { if (event.key === 'Enter') { this.addTask(); } }} onChange={event => this.setState({ title: event.target.value })} />
                    <span className="input-group-btn">
                        <button className="btn" onClick={() => this.addTask()}>Add</button>
                    </span>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(AddTask);