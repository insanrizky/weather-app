import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-ocean-dark m-b-20">
        <div className="container">
          <a className="navbar-brand" href="#"><img src="/static/favicon.png" alt="logo"/> <span>Weather App</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <ul className="navbar-nav my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/muhamad-insan-rizky/"><span className="fab fa-linkedin-in"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/insanrizky/weather-app"><span className="fab fa-github"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
