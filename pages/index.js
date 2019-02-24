import React, { Component } from 'react';
import Head from '../components/layouts/head';
import Nav from '../components/layouts/nav';
import Main from '../components/main';
import Foot from '../components/layouts/foot';
import '../assets/scss/styles.scss';

import { connect } from 'react-redux'
import { getCurrentWeather, getWeatherHistory, getWeatherForecast } from '../stores/actions/weather'
import { errorNotif, loader } from '../utils/notification';

class Home extends Component {
    componentDidMount() {
        this.initData();
    }

    initData = () => {
        const { dispatch } = this.props;
        loader();
        try {
            getCurrentWeather(dispatch);
            getWeatherHistory(dispatch, {});
            getWeatherForecast(dispatch, {});
            setTimeout(() => {
                swal.close();
            }, 2000);
        } catch (err) {
            errorNotif(err);
        }
    }

    render() {
        return (
            <div>
              <Head/>
              <Nav/>
              <Main/>
              <Foot/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const weather = state.weather;
    return { weather };
}

export default connect(mapStateToProps)(Home);
