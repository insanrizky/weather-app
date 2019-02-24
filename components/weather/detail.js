import React, { Component } from 'react';
import WeatherNow from '../weather/now';
import WeatherToday from '../weather/today';
import WeatherForecast from '../weather/forecast';

class Detail extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <WeatherNow/>
                    </div>
                    <div className="col-md-9">
                        <WeatherToday/>
                        <WeatherForecast/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;