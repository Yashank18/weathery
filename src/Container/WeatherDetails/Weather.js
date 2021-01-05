import React,{Component} from 'react';
import axios from '../../Axios-weather'
import './Weather.css';

import CardArea from '../CardArea/CardArea';
import SearchArea from '../SearchArea/SearchArea'
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
            <div style={{display:"flex"}}>
                <div className="leftArea">
                    <div className="leftArea-inside">
                        <SearchArea/>
                    </div>
                </div>
                <div className="rightArea">
                    <div className="rightArea-inside">
                        <CardArea />
                    </div>
                    
                </div>
                
            </div>
        )
    }
    
}
export default Weather;