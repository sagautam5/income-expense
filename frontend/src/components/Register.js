import React,{Component} from 'react';

export default class Register extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        }
    }

    updateInput = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        this.setState({[name]: value});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        var user = fetch('localhost:8000/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirm_password: this.state.confirm_password
            })
        });
        console.log(user);
    }

    render(){
        return(
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                        <form className="login100-form validate-form flex-sb flex-w" onSubmit={this.handleSubmit}>
                            <span className="login100-form-title p-b-32">
                                Sign Up
                            </span>
                            <span className="txt1 p-b-11">
                                Name
                            </span>
                            <div className="wrap-input100 validate-input m-b-36" >
                                <input className="input100" type="text" name="name" value={this.state.name} onChange={this.updateInput}/>
                                <span className="focus-input100"></span>
                            </div>
                            <span className="txt1 p-b-11">
                                Email
                            </span>
                            <div className="wrap-input100 validate-input m-b-36">
                                <input className="input100" type="text" name="email" value={this.state.email} onChange={this.updateInput}/>
                                <span className="focus-input100"></span>
                            </div>
                            <span className="txt1 p-b-11">
                                Password
                            </span>
                            <div className="wrap-input100 validate-input m-b-36">
                                <input className="input100" type="password" name="password" value={this.state.password} onChange={this.updateInput}/>
                                <span className="focus-input100"></span>
                            </div>
                            <span className="txt1 p-b-11">
                                Confirm Password
                            </span>
                            <div className="wrap-input100 validate-input m-b-18">
                                <input className="input100" type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.updateInput}/>
                                <span className="focus-input100"></span>
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Register
                                </button>
                            </div>
                            <div className="flex-sb-m w-full p-b-48 m-t-60 text-center">
                                <label>
                                    Already have an account ?
                                    <a className="txt3 m-l-5" href="/login">
                                        Sign In Now
                                    </a>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
