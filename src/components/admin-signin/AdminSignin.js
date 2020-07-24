import React, {Component} from 'react';
import './AdminSignin.css';
import { Link } from 'react-router-dom';

export default class AdminSignin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            rememberMe: false
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.email +this.state.password);
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.name === 'rememberMe' ? event.target.checked : event.target.value;
        
        

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <React.Fragment>
                <div>
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <div className="text-center mb-4">
                            <Link className="navbar-brand h2" to="/">Start Bootstrap</Link>
                            <h1 className="h4 mb-3 font-weight-normal">Signin</h1>
                        </div>
                        <div className="form-label-group">
                            <input 
                                type="email" 
                                name="email" 
                                value={this.state.username}
                                className="form-control" 
                                placeholder="Email address" 
                                required 
                                onChange={this.handleChange}
                            />
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-label-group">
                            <input 
                                type="password" 
                                name="password" 
                                value={this.state.password}
                                className="form-control" 
                                placeholder="Password" 
                                required 
                                onChange={this.handleChange}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input 
                                    type="checkbox"
                                    name="rememberMe" 
                                    value={this.state.rememberMe}
                                    onChange={this.handleChange}
                                /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}