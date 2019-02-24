import React, { Component } from 'react';

class Forecast extends Component {
    render() {
        return (
            <div className="card m-b-20">
                <div className="card-body">
                    <h5 className="card-title">Timeline Weather</h5>
                    <div className="row">
                        <div className="col weather__day">
                            <div className="text-center">
                                <img src="/static/weather/64x64/day/113.png" className="weather__icon"/>
                                <div><small>Patchy rain possible</small></div>
                                <p>Mon, Feb 22</p>
                            </div>
                            <div className="card-footer">See Details <span className="fa fa-chevron-right"></span></div>
                        </div>
                        <div className="col weather__day">
                            <div className="text-center">
                                <img src="/static/weather/64x64/day/113.png" className="weather__icon"/>
                                <div><small>Patchy rain possible</small></div>
                                <p>Mon, Feb 23</p>
                            </div>
                            <div className="card-footer">See Details <span className="fa fa-chevron-right"></span></div>
                        </div>
                        <div className="col weather__day">
                            <div className="text-center">
                                <img src="/static/weather/64x64/day/113.png" className="weather__icon"/>
                                <div><small>Patchy rain possible</small></div>
                                <p>Mon, Feb 24</p>
                            </div>
                            <div className="card-footer">See Details <span className="fa fa-chevron-right"></span></div>
                        </div>
                        <div className="col weather__day">
                            <div className="text-center">
                                <img src="/static/weather/64x64/day/113.png" className="weather__icon"/>
                                <div><small>Patchy rain possible</small></div>
                                <p>Mon, Feb 25</p>
                            </div>
                            <div className="card-footer">See Details <span className="fa fa-chevron-right"></span></div>
                        </div>
                        <div className="col weather__day">
                            <div className="text-center">
                                <img src="/static/weather/64x64/day/113.png" className="weather__icon"/>
                                <div><small>Patchy rain possible</small></div>
                                <p>Mon, Feb 26</p>
                            </div>
                            <div className="card-footer">See Details <span className="fa fa-chevron-right"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forecast;
