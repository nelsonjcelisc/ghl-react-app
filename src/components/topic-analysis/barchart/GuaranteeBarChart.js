import React from "react";
import axios from "axios";
import BarChartGrid from "./BarChartGrid";

export default class GuaranteeBarChart extends React.Component {

    state = {
        content: []
    }

    componentDidMount() {
        axios.get(`http://192.168.10.10:5001/topic/guarantee/barchart`)
            .then(res => {
                const content = res.data;
                this.setState({content});
            })
    }

    render() {
        return BarChartGrid({col: 3, data: this.state.content})
    }
}
