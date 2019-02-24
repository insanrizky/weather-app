import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dateFormatFull } from '../../utils/helper';

class Forecast extends Component {
    renderForecastWeather = () => {
        let el = [];
        const forecastday = this.props.data && this.props.data.forecast && this.props.data.forecast.forecastday;
        if (forecastday && forecastday.length) {
            el = forecastday.map((f, idx) => {
                return (<div key={idx} className="col weather__day">
                    <div className="text-center min__h--150">
                        <img src={ f.day.condition.icon } className="weather__icon"/>
                        <div><small>{ f.day.condition.text }</small></div>
                        <p>{ dateFormatFull(f.date) }</p>
                    </div>
                    <div className="card-footer">See Details <span className="fa fa-chevron-right"></span></div>
                </div>)
            })
        }
        return el;
    }
    render() {
        return (
            <div className="card m-b-20">
                <div className="card-body">
                    <h5 className="card-title">Weather Forecast</h5><hr/>
                    <div className="row">
                        { this.renderForecastWeather() }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const data = state.weather.forecast;
    return { data };
}

export default connect(mapStateToProps)(Forecast);
