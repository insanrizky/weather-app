import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dateFormatFull } from '../../utils/helper';
import ModalForecast from '../modals/forecast';
class Forecast extends Component {
    state = {
        modalOpen: false,
        modalData: {}
    }

    openDetail = (data) => {
        this.setState({
            modalOpen: true,
            modalData: data
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false,
            modalData: {}
        })
    }

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
                    <div onClick={() => this.openDetail(f)} className="card-footer">See Details <span className="fa fa-chevron-right"></span></div>
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

                <ModalForecast
                    isOpen={this.state.modalOpen}
                    data={this.state.modalData}
                    closeModal={this.closeModal}
                    />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const data = state.weather.forecast;
    return { data };
}

export default connect(mapStateToProps)(Forecast);
