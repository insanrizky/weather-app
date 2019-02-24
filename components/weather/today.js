import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dateFormatHour } from '../../utils/helper';

class Today extends Component {
    renderWeatherDay = () => {
        let el = [];
        const forecastday = this.props.data && this.props.data.forecast && this.props.data.forecast.forecastday;
        if (forecastday && forecastday.length) {
            el = forecastday[0].hour.map((h, idx) => {
                if (idx % 5 === 0) {
                    return (<div key={idx} className="col weather__day">
                        <div className="text-center">
                            <img src={ h.condition.icon } className="weather__icon"/>
                            <div><small>{ h.condition.text }</small></div>
                            <h6>{ dateFormatHour(h.time) }</h6>
                        </div>
                    </div>)
                }
            })
        }
        return el;
    }
    render() {
        return (
            <div className="card m-b-20">
                <div className="card-body">
                    <h5 className="card-title">Today's Weather</h5><hr/>
                    <div className="row">
                        { this.renderWeatherDay() }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const data = state.weather.history;
    return { data };
}

export default connect(mapStateToProps)(Today);
