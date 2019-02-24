import React, { Component } from 'react';

class Now extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="">
                            <div className="text-center">
                                <img src="/static/weather/64x64/day/113.png" className="weather__icon--big"/>
                                <p>Sky is clear</p>
                            </div>
                            <hr/>
                            <div className="">
                                <h5>Jakarta</h5>
                                <span>Wednesday, February 24</span>
                                <h3>30 C</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <small><i>Powered by: <a href="https://www.apixu.com">APIXIU</a></i></small>
                </div>
            </div>
        )
    }
}

export default Now;
