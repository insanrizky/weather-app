import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentWeather, getWeatherHistory, getWeatherForecast } from '../../stores/actions/weather'
import { loader, errorNotif } from '../../utils/notification';

class Search extends Component {
    state = {
        search: ''
    }

    search = async (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { search } = this.state;
        loader();
        try {
            getCurrentWeather(dispatch, { city: search });
            getWeatherHistory(dispatch, { city: search });
            getWeatherForecast(dispatch, { city: search });
            setTimeout(() => {
                this.setState({ search: '' })
                swal.close();
            }, 2000);
        } catch (err) {
            errorNotif(err);
        }
    }
    render() {
        return (
            <div className="row justify-content-md-center m-50">
                <div className="col-md-8">
                    <form id="form-search" onSubmit={this.search}>
                        <div className="form-group">
                            <input type="text" value={ this.state.search } onChange={e => this.setState({ search: e.target.value })} className="form-control" placeholder="Type a city (ex: Jakarta, London, Yokohama, etc)"/>
                        </div>
                    </form>
                </div>
                <div className="col-md-2">
                    <button type="submit" form="form-search" className="btn btn-success btn-block"><span className="fas fa-sun"></span> Get Weather!</button>
                </div>
            </div>
        )
    }
}

export default connect()(Search);
