import React, {Fragment} from 'react';

import axios from 'axios';
import {Badge} from "reactstrap";
import serviceUrls from "../../common/ServicesConfig";

export default class Recommendations extends React.Component {
    state = {
        content: []
    }

    componentDidMount() {
        axios.get(serviceUrls.recommenderSystem + "recomendaciones/" + this.props.userId )
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
                            <div className="row">
                                <div className="col-6" align='left'>
                                    - {entry["categoria"]}
                                </div>
                            </div>

                        </Fragment>
                    })
                }
                
            </Fragment>
        )
    }
}
