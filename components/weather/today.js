import React, { Component } from 'react';

class Today extends Component {
    render() {
        return (
            <div className="card m-b-20">
                <div className="card-body">
                    <h5 className="card-title">Today Weather</h5>
                    <div className="row">
                        <div className="col weather__day">
                            <div className="text-center">
                                <img src="/static/weather/64x64/day/113.png" className="weather__icon"/>
                                <p>09:00 AM</p>
                            </div>
                        </div>
                        <div className="col weather__day">
                            <div className="text-center">
                                <img src="/static/weather/64x64/day/113.png" className="weather__icon"/>
                                <p>09:00 AM</p>
                            </div>
                        </div>
                        <div className="col weather__day">
                            <div className="text-center">
                                <img src="/static/weather/64x64/day/113.png" className="weather__icon"/>
                                <p>09:00 AM</p>
                            </div>
                        </div>
                        <div className="col weather__day">
                            <div className="text-center">
                                <img src="/static/weather/64x64/day/113.png" className="weather__icon"/>
                                <p>09:00 AM</p>
                            </div>
                        </div>
                        <div className="col weather__day">
                            <div className="text-center">
                                <img src="/static/weather/64x64/day/113.png" className="weather__icon"/>
                                <p>09:00 AM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Today;
