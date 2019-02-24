import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindToElement, dateFormatFull} from '../../utils/helper';

class Now extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="">
                            <div className="text-center">
                                <img src={ bindToElement(data.current, 'condition.icon') } className="weather__icon--big"/>
                                <p>{ bindToElement(data.current, 'condition.text') }</p>
                            </div>
                            <hr/>
                            <div className="">
                                <h6>{ dateFormatFull(bindToElement(data.current, 'last_updated')) }</h6>
                                <h5>{ bindToElement(data.location, 'name') }, { bindToElement(data.location, 'country') }</h5>
                                <h4>{ bindToElement(data.current, 'feelslike_c') }&#8451; / { bindToElement(data.current, 'feelslike_f') }&#8457;</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const data = state.weather.current;
    return { data };
}

export default connect(mapStateToProps)(Now);
