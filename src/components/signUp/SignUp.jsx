import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../../firebase';
import './SignUp.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }
    signUp() {
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({ error });
            });
    }
    render() {
        return (
            <div className="signUp-container">
                <div className="signUp-form">
                    <h2 className="text-center">Task Manager</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="email" onChange={event => this.setState({ email: event.target.value })} />
                        <input type="password" className="form-control" placeholder="password" onKeyPress={event => {if (event.key === 'Enter') {this.signUp();}}} onChange={event => this.setState({ password: event.target.value })} />
                        <button className="btn" onClick={() => this.signUp()}>Sign Up</button>
                    </div>
                    <div className="error-message">{this.state.error.message}</div>
                    <div className="link-form"><Link to={'/sign-in'}>Already an user? Sign in instead</Link></div>
                </div>
            </div>
        )
    }
}

export default SignUp;