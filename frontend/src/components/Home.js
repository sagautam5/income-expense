import React,{Component} from 'react';
import axios from 'axios';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
        }
    }
    componentDidMount() {
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNmMTkxMjQ0ZWVhZmJlZjNmMDljM2ExMDc0MzgwZjE2ZGY2MGY3YTAwOGI0ZmQyZjY4OTI2NWJiZWJlNGIzNTU0ZDNhZGM1ZDNhOTk2ODgzIn0.eyJhdWQiOiIzIiwianRpIjoiY2YxOTEyNDRlZWFmYmVmM2YwOWMzYTEwNzQzODBmMTZkZjYwZjdhMDA4YjRmZDJmNjg5MjY1YmJlYmU0YjM1NTRkM2FkYzVkM2E5OTY4ODMiLCJpYXQiOjE1NDU1ODQ4ODYsIm5iZiI6MTU0NTU4NDg4NiwiZXhwIjoxNTc3MTIwODg2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.rRgHTChM8n-3r6syYaH9t0KKQLYLki9_jAsg6UUtX5Y3KUznr8IuAQnPKpuy-6jirEtjB6lG5GA6z7vHonp0YH-dWR3VxRfw_69vf6DfV0Z1yVzqitz7h-zsbC4j…BT_roRITEVusZWogUcpgMrvZs-jbVpfb6DpfNE0RA9ID2t_LSK9wlIc7_LeZFgqwPhBr90aUjpWQNnAfPg8l_DiWWAZLWoSRlYswQ9pQkIwyI-QYfTfIXxAKDdnOTLn7u4cLx1a_lj0IrIudlLPAPI3gqeJWzYYD8e3y7TuQtUv3zvb7rzW-AT6dV2RQO-bzd4OZDraRzrRbhc1qmYy1v0o0FkRxKgIagx69iIjwEyH7wwG08tq9OSptRtviGKZk1cu5T9qywDc4fA61_3lEPPACh_hUgdUc7qOnaKk3mU8nfnonSA0NQzfV_nK9PvGG_NzUQVk4Gei3YEqsUBl-JgofIEO310OBL9cgfa7cFjPMaw90o6XcP9c3abZZFHWGhVJPSrzyLidr_rC2RVhX5M7UvNDxS5Rw-bOWpQiYhd69_-Jk3B92gFWbLk4IBRqkaxGhEmV7netaTkFDF_e0f-R7HjUhicDJe6HQKCBFqzsAwSyax7NoFquWxZeJ4EA';
        var config = {
            headers: {
                'Authorization': 'bearer ' + token,
            }
        };

        axios.get(
            '127.0.0.1:8000/api/details/',config
        ).then(response => {
            this.setState({
                    name: response.data.success.name,
                    email: response.data.success.email
                });
        }).catch(error=>{
            console.log(error);

        });
    }

    render(){
        return(
            <div>
                <h4>Name: {this.state.name}</h4>
                <h4>Email: {this.state.email}</h4>
            </div>
        );
    }
}