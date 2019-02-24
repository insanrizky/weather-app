import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="row justify-content-md-center m-50">
                <div className="col-md-8">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Type a city (ex: Jakarta, London, Yokohama, etc)"/>
                    </div>
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-primary btn-block">Get Weather!</button>
                </div>
            </div>
        )
    }
}

export default Search;
