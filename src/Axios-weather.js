import axios from'axios';

const instance=axios.create({
    baseURL:'https://api.weatherbit.io/v2.0/forecast/daily?'
});

export default instance;