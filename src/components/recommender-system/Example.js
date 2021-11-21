import React from 'react';

import axios from 'axios';
import {Table} from "reactstrap";

// Ejemplo para Nelson. Muestra como consumir datos y ponerlos en una tabla con estilos sacada de https://reactstrap.github.io/?path=/docs/components-table--striped
export default class Example extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div className="row">
                <Table striped>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.persons.map(person => <tr><td>{person.name}</td></tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}