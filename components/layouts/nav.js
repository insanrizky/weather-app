import React, { Component } from 'react'
import Link from 'next/link'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-ocean-dark m-b-20">
        <div className="container">
          <a className="navbar-brand" href="#">Weather App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <ul className="navbar-nav my-2 my-lg-0">
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/news">
                  <a className="nav-link" href="#">News</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
