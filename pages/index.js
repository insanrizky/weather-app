import React, { Component } from 'react';
import Head from '../components/layouts/head';
import Nav from '../components/layouts/nav';
import Main from '../components/main';
import '../assets/scss/styles.scss';

import { connect } from 'react-redux'
import { getCurrentWeather, getWeatherHistory, getWeatherForecast } from '../stores/actions/weather'

class Home extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        getCurrentWeather(dispatch);
        getWeatherHistory(dispatch, {});
        getWeatherForecast(dispatch, {});
    }

    render() {
        return (
            <div>
              <Head/>
              <Nav/>
              <Main/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const weather = state.weather;
    return { weather };
}

export default connect(mapStateToProps)(Home);
