import React,{Component} from 'react';
import axios from '../../Axios-weather'
import './Weather.css';

import CardArea from '../CardArea/CardArea';

class Weather extends Component{
    constructor(){
        super();
        this.state={
            temperature:35,
            city:'',
            searchedCity:'',
            weekly:[]
        }
        this.getTemp=this.getTemp.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.setState({searchedCity:event.target.value});
    }
    getTemp(){
        axios.get('daily?city='+this.state.searchedCity+'&key=da0d9a5e7c5543fca0589ef833678dfd')
        .then(resposnse=>{
            let tempp=resposnse.data.data;
            console.log(resposnse.data)
            this.setState({
                ...this.state,
                temperature:tempp[0].app_max_temp,
                weekly:tempp,
                city:this.state.searchedCity
            })
        })
        .catch(error=>{
            console.log(error)
        });
        console.log(this.state.weekly);
    }
    render(){
        return(
            <div className="main">
                <div className="leftArea">
                    <div className="leftArea-inside">
                        <div className="myForm">
                            <h4>Search weather on your city</h4>
                            <input type="text" placeholder="City" onChange={this.handleChange} ></input>
                            <button onClick={this.getTemp}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="rightArea">
                    <div className="rightArea-inside">
                        <h1>📍 {this.state.city}</h1>
                        <CardArea weekdata={this.state.weekly}/>
                    </div>
                    
                </div>
                
            </div>
        )
    }
    
}
export default Weather;