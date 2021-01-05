import React,{Component} from 'react';
import axios from '../../Axios-weather'
import './Weather.css'
class Weather extends Component{
    state={
        temperature:35,
        city:'Jind',
        description:null
    }
    handleChange=(event)=>{
        this.setState({city:event.target.value});
        console.log(this.state.city)
    }
    getTemp=(event)=>{
        event.preventDefault();
        axios.get('/weather?q='+this.state.city+'&appid=4dff1e6ae5b8615562525cb662cd9f4d')
        .then(resposnse=>{
            let tempp=resposnse.data.main.temp;
            tempp=tempp-273;
            tempp=tempp.toFixed(2)
            this.setState({temperature:tempp,description:resposnse.data.weather[0].description})
        })
        .catch(error=>{
            this.setState({error:true})
        });
        console.log(this.state.temperature);
    }
    render(){
        return(
            <div>
                <h1 className="Temp">{this.state.temperature}* C</h1>
        <h3>{this.state.description}</h3>
                <form className="myForm">
                    <input type="text" placeholder="City" onChange={this.handleChange}></input>
                    <button onClick={this.getTemp}>Search</button>
                </form>
            </div>
        )
    }
    
}
export default Weather;