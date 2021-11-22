import React, {Fragment} from 'react';

import axios from 'axios';
import {Badge} from "reactstrap";
import serviceUrls from "../../common/ServicesConfig";

export default class StaysInformation extends React.Component {
    state = {
        content: []
    }

    componentDidMount() {
        axios.get(serviceUrls.recommenderSystem + "hotel/" + this.props.userId )
            .then(res => {
                const content = res.data;
                this.setState({content});
            })
    }

    render() {
        if (this.state.content.length === 0) {
            return <p/>;
        }

        return (
            <Fragment>
                {
                    this.state.content.map(entry => {
                        return <Fragment>
                            <h3>Estadias</h3>

                            <div className="row">
                                <div className="col-2">
                                    <label><strong>Hotel</strong></label>
                                    <p>{entry["Hotel"]} </p>
                                </div>
                                <div className="col-2">
                                    <label><strong>Desde</strong></label>
                                    <p>{entry["FCHECKIN"]}</p>
                                </div>
                                <div className="col-2">
                                    <label><strong>Hasta</strong></label>
                                    <p>{entry["FCHECKOUT"]}</p>
                                </div>
                                <div className="col-2">
                                    <label><strong>Segmento</strong></label>
                                    <p>{entry["CODSEGMENTO"]}</p>
                                </div>
                                <div className="col-2">
                                    <label><strong>Nacionalidad</strong></label>
                                    <p>{entry["NACION_CLI"]}</p>
                                </div>
                            </div>

                        </Fragment>
                    })
                }

            </Fragment>
        )
    }
}

