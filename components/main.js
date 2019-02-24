import React, { Component } from 'react';
import WeatherSearch from './weather/search';
import WeatherDetail from './weather/detail';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <WeatherSearch/>
                <hr/>
                <WeatherDetail/>
            </div>
        )
    }
}

export default Main;
