import React,{Component} from 'react';

export default class Register extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            api_token:'',
        }
        this.register = this.register.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    register(event){
        event.preventDefault();
        fetch('http://incomeexpense.stacklearning.com/api/v1/register',{
            method : 'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify(this.state),
        }).then(
          function (response) {
              if(response.status_code !==200){
                  console.log('Problem in fetching');
                  return;
              }
              response.json().then(function(data) {
                  console.log(data);
                  this.setState(['api_token'],data.api_token);
              });
          }
        );
    }

    render(){
        return(
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                        <form className="login100-form validate-form flex-sb flex-w" onSubmit={this.register}>
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
                                <input className="input100" type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.updateInput}/>
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
                                    <a className="txt3 m-l-5" href="/">
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
