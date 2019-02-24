import React, { Component } from 'react';
import Head from '../components/layouts/head';
import Nav from '../components/layouts/nav';
import Main from '../components/main';
import '../assets/scss/styles.scss';

import { connect } from 'react-redux'
import { getWeatherByLocation } from '../stores/actions/weather'

class Home extends Component {
    componentDidMount() {
        getWeatherByLocation(this.props.dispatch);
    }
    render() {
        console.log(this.props.weather);
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
