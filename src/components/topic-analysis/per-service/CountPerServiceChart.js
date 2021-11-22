import React from "react";
import axios from "axios";
import GroupedBarChartGrid from "./GroupedBarChartGrid";
import serviceUrls from "../../../common/ServicesConfig";

export default class CountPerServiceChart extends React.Component {
    state = {
        content: []
    }

    componentDidMount() {
        axios.get(serviceUrls.topicAnalysis + `topic/count/per-service`)
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