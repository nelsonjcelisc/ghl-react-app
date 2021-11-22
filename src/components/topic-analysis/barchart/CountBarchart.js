import React from "react";
import axios from "axios";
import BarChartGrid from "./BarChartGrid";
import serviceUrls from "../../../common/ServicesConfig";

export default class CountBarchart extends React.Component {

    state = {
        content: []
    }

    componentDidMount() {
        axios.get(serviceUrls.topicAnalysis + `topic/count/barchart`)
            .then(res => {
                const content = res.data;
                this.setState({content});
            })
    }

    render() {
        return BarChartGrid({col: 3, data: this.state.content})
    }
}
