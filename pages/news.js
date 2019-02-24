import React, { Component } from 'react';
import Head from '../components/layouts/head';
import Nav from '../components/layouts/nav';
import '../assets/scss/styles.scss';

import { connect } from 'react-redux'
class News extends Component {
  render() {
    return (
      <div>
        <Head/>
        <Nav/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>News</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(News);
