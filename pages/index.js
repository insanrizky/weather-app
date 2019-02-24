import React, { Component } from 'react';
import Head from '../components/layouts/head';
import Nav from '../components/layouts/nav';
import Main from '../components/main';
import '../assets/scss/styles.scss';

class Home extends Component {
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

export default Home;
