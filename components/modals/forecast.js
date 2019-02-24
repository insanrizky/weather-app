import React, { Component } from 'react';
import { dateFormatFull } from '../../utils/helper';

class ModalForecast extends Component {
    render() {
        const {
            isOpen,
            data,
            closeModal,
        } = this.props;
        return (
            <div className={`modal fade ${isOpen ? 'show modal--darken' : ''}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Forecast Detail</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        { Object.keys(data).length ? 
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="col weather__day--nomargin">
                                        <div className="text-center min__h--150">
                                            <img src={ data.day.condition.icon } className="weather__icon"/>
                                            <div><small>{ data.day.condition.text }</small></div>
                                            <div>{ dateFormatFull(data.date) }</div><hr/>
                                            <div>{ data.day.avgtemp_c } &#8451; / { data.day.avgtemp_f } &#8457;</div>
                                            <div>Humidity: { data.day.avghumidity }%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="col weather__day--nomargin">
                                        <table class="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <td>Sunrise</td>
                                                    <td>: { data.astro.sunrise }</td>
                                                </tr>
                                                <tr>
                                                    <td>Sunset</td>
                                                    <td>: { data.astro.sunset }</td>
                                                </tr>
                                                <tr>
                                                    <td>Moonrise</td>
                                                    <td>: { data.astro.moonrise }</td>
                                                </tr>
                                                <tr>
                                                    <td>Moonset</td>
                                                    <td>: { data.astro.moonset }</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            : ''
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn__outline--ocean" data-dismiss="modal" onClick={closeModal}>Tutup</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalForecast;