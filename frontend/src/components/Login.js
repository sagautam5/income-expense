import React,{Component} from 'react';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            type: 'password',
            eye: 'fa fa-eye',
            email: '',
            password: '',
            remember: false
        }
        this.showHide = this.showHide.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateRemember = this.updateRemember.bind(this);
        console.log(this.state);
    }

    showHide(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            type: this.state.type === 'input' ? 'password' : 'input',
            eye: this.state.type ==='input' ? 'fa fa-eye': 'fa fa-eye-slash'
        })
    }

    updateEmail(event){
        this.setState({email: event.target.value});
        console.log(this.state);
    }
    updatePassword(event){
        this.setState({password: event.target.value});
        console.log(this.state);
    }
    updateRemember(event){
        var current = this.state.remember;
        this.setState({remember: !current});
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render(){
        return(
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                        <form className="login100-form validate-form flex-sb flex-w" onSubmit={this.handleSubmit}>
                            <span className="login100-form-title p-b-32">
                                Sign In
                            </span>

                            <span className="txt1 p-b-11">
                                Email
                            </span>
                            <div className="wrap-input100 validate-input m-b-36" data-validate="Email is required">
                                <input className="input100" type="text" name="email" onChange = {this.updateEmail} value={this.state.email}/>
                                <span className="focus-input100"></span>
                            </div>

                            <span className="txt1 p-b-11">
                                Password
                            </span>
                            <div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
                                <span className="btn-show-pass">
                                    <i className={this.state.eye} onClick={this.showHide}></i>
                                </span>
                                <input className="input100" type={this.state.type} name="password" onChange = {this.updatePassword} value={this.state.password}/>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="flex-sb-m w-full p-b-48">
                                <div className="contact100-form-checkbox">
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember" onClick = {this.updateRemember}/>
                                    <label className="label-checkbox100" htmlFor="ckb1">
                                        Remember me
                                    </label>
                                </div>

                                <div>
                                    <a href="#" className="txt3">
                                        Forgot Password ?
                                    </a>
                                </div>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Login
                                </button>
                            </div>
                            <div className="flex-sb-m w-full p-b-48 m-t-60 text-center">
                                <label>
                                    Don't have an account ?
                                    <a className="txt3 m-l-10" href="/register">
                                        Sign Up Now
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
