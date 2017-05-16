import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../../firebase';
import './SignIn.scss';

class SignIn extends Component {
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
    signIn() {
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({ error });
            });
    }
    render() {
        return (
            <div className="signIn-container">
                <div className="signIn-form">
                    <h2 className="text-center">Task Manager</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="email" onChange={event => this.setState({ email: event.target.value })} />
                        <input type="password" className="form-control" placeholder="password" onKeyPress={event => {if (event.key === 'Enter') {this.signIn();}}} onChange={event => this.setState({ password: event.target.value })} />
                        <button className="btn" onClick={() => this.signIn()}>Sign In</button>
                    </div>
                    <div className="error-message">{this.state.error.message}</div>
                    <div className="link-form"><Link to={'/sign-up'}>or Sign up instead</Link></div>
                </div>
            </div>
        )
    }
}

export default SignIn;