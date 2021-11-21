import React from "react";
import axios from "axios";
import GroupedBarChartGrid from "./GroupedBarChartGrid";

export default class CountPerServiceChart extends React.Component {
    state = {
        content: []
    }

    componentDidMount() {
        axios.get(`http://192.168.10.10:5001/topic/count/per-service`)
            .then(res => {
                const content = res.data;
                this.setState({content});
                console.log(content);
            })
    }

    render() {
        return GroupedBarChartGrid({data: this.state.content, width: "100%", height: "300%"})
    }
}