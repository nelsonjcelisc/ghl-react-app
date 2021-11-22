import React from 'react';
import ManagementTreeMap from "../clv/ManagementTreeMapChart";
import GuaranteeBarChart from "../topic-analysis/barchart/GuaranteeBarChart";
import GuaranteePerServiceChart from "../topic-analysis/per-service/GuaranteePerServiceChart";
import CountBarchart from "../topic-analysis/barchart/CountBarchart";
import CountPerServiceChart from "../topic-analysis/per-service/CountPerServiceChart";

export default class Management extends React.Component {

    render() {
        return <div className="container">
            <div className="row">
                <h3>Análisis de tópicos</h3>
                <h4>Quejas con compensación</h4>
                <GuaranteeBarChart/>
                <GuaranteePerServiceChart/>
                <h4>Quejas con respuesta formal</h4>
                <CountBarchart/>
                <CountPerServiceChart/>
            </div>
            <hr/>
            <div className="row">
                <h3>Customer Lifetime Value</h3>
                <ManagementTreeMap/>
            </div>
            <hr/>
            <div className="row">
                Análisis de solicitudes: <a href="/solicitudes" target="_blank">Ir a dashboard solicitudes</a>
            </div>
        </div>
    }
}
