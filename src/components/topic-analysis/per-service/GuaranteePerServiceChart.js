import React from "react";
import axios from "axios";
import GroupedBarChartGrid from "./GroupedBarChartGrid";
import serviceUrls from "../../../common/ServicesConfig";

export default class GuaranteePerServiceChart extends React.Component {
    state = {
        content: []
    }

    componentDidMount() {
        axios.get(serviceUrls.topicAnalysis + `topic/guarantee/per-service`)
            .then(res => {
                const content = res.data;
                this.setState({content});
            })
    }

    render() {
        return GroupedBarChartGrid({data: this.state.content, width: "100%", height: "300%"})
    }
}