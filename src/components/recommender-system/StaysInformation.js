import React, {Fragment} from 'react';

import axios from 'axios';
import {Badge} from "reactstrap";
import serviceUrls from "../../common/ServicesConfig";

export default class StaysInformation extends React.Component {
    state = {
        content: []
    }

    componentDidMount() {
        axios.get(serviceUrls.recommenderSystem + "ghlplus/" + this.props.userId )
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
                            <h3>Datos de usuario</h3>

                            <div className="row">
                                <div className="col-6">
                                    <label><strong>Nombre</strong></label>
                                    <p>{entry["Nombre"]} {entry["Apellidos"]} </p>
                                </div>
                                <div className="col-6">
                                    <label><strong>Correo electrónico</strong></label>
                                    <p>{entry["Correo electronico"]}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label><strong>Dirección</strong></label>
                                    <p>{entry["Direccion"]}</p>
                                </div>
                                <div className="col-4">
                                    <label><strong>Ciudad/Provincia/País</strong></label>
                                    <p>{entry["Ciudad"] + ' / ' + entry["Provincia"] + ' / ' + entry["Pais"]}</p>
                                </div>
                                <div className="col-4">
                                    <label><strong>Código Postal</strong></label>
                                    <p>{entry["Cod Postal"] == null || entry["Cod Postal"] === "" ? '/' : entry["Cod Postal"]}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label><strong>Fecha de nacimiento</strong></label>
                                    <p>{entry["Fecha de nacimiento (YYYY-MM-DD)"] == null || entry["Fecha de nacimiento (YYYY-MM-DD)"] === "" ? '/' : entry["Fecha de nacimiento (YYYY-MM-DD)"]}</p>
                                </div>
                                <div className="col-4">
                                    <label><strong>Teléfono</strong></label>
                                    <p>{entry["Telefono"] == null || entry["Telefono"] === "" ? '/' : entry["Telefono"]}</p>
                                </div>
                                <div className="col-4">
                                    <label><strong>Idioma</strong></label>
                                    <p>{entry["idioma"] == null || entry["idioma"] === "" ? '/' : entry["idioma"]}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label><strong>Código del nivel</strong></label>
                                    <p>{entry["Codigo del nivel"]}</p>
                                </div>
                                <div className="col-4">
                                    <label><strong>Alta / Idioma alta</strong></label>
                                    <p>{entry["Alta"] + ' / ' + entry["Idioma alta"]}</p>
                                </div>
                                <div className="col-4">
                                    <label><strong>DNI</strong></label>
                                    <p>{entry["DNI"]}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label><strong>Loyalty Id</strong></label>
                                    <p>{entry["Loyalty ID"] == null || entry["Loyalty ID"] === "" ? '/' : entry["Loyalty ID"]}</p>
                                </div>
                                <div className="col-4">
                                    <label><strong>Nombre del nivel</strong></label>
                                    <p>{entry["Nombre del nivel"]}</p>
                                </div>
                                <div className="col-4">
                                    <label><strong>Quiero recibir informacion comercial</strong></label>
                                    <p>{entry["Quiero recibir informacion comercial"] == null || entry["Quiero recibir informacion comercial"] === "" ? '/' : entry["Quiero recibir informacion comercial"]}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label><strong>Origen alta</strong></label>
                                    <p>{entry["Origen alta"]}</p>
                                </div>
                                <div className="col-3">
                                    <label><strong>Proyecto alta</strong></label>
                                    <p>{entry["Proyecto alta"]}</p>
                                </div>
                                <div className="col-3">
                                    <label><strong>Tarjeta</strong></label>
                                    <p>{entry["Tarjeta"] == null}</p>
                                </div>
                                <div className="col-3">
                                    <label><strong>Última estancia</strong></label>
                                    <p>{entry["Ultima estancia"] == null}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <label><strong>Reservas</strong></label>
                                    <p><Badge color="info">{entry["Num  Reservas"]}</Badge></p>
                                </div>
                                <div className="col-2">
                                    <label><strong>Noches</strong></label>
                                    <p><Badge color="info">{entry["Num  noches"]}</Badge></p>
                                </div>
                                <div className="col-2">
                                    <label><strong>Noches disfrutadas</strong></label>
                                    <p><Badge color="info">{entry["Num  noches disfrutadas"]}</Badge></p>
                                </div>
                                <div className="col-2">
                                    <label><strong>Reservas disfrutadas</strong></label>
                                    <p><Badge color="info">{entry["Num  reservas disfrutadas"]}</Badge></p>
                                </div>
                                <div className="col-2">
                                    <label><strong>TTV</strong></label>
                                    <p><Badge color="info">{entry["TTV"]}</Badge></p>
                                </div>
                                <div className="col-2">
                                    <label><strong>TTV gastado</strong></label>
                                    <p><Badge color="info">{entry["TTV gastado"]}</Badge></p>
                                </div>
                            </div>

                        </Fragment>
                    })
                }

            </Fragment>
        )
    }
}

