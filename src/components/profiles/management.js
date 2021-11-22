import React from 'react';
import ManagementTreeMap from "../clv/ManagementTreeMapChart";

export default class Management extends React.Component {

    render() {
        return <div className="container">
            <div className="row">
                <h3>Análisis de tópicos</h3>
            </div>
            <hr/>
            <div className="row">
                <h3>Customer Lifetime Value</h3>
                <ManagementTreeMap/>
            </div>
            <hr/>
            <div className="row">
                Sistema de recomendacion
            </div>
        </div>
    }
}