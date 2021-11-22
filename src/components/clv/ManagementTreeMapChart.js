import React from "react";
import axios from "axios";
import TreeMapChart from "./TreeMapChart";
import serviceUrls from "../../common/ServicesConfig";

export default class ManagementTreeMap extends React.Component {
    state = {
        content: []
    }

    componentDidMount() {
        axios.get("http://ec2-18-224-7-158.us-east-2.compute.amazonaws.com:5002/rfm/groups/data?hotel=GHL")
            .then(res => {
                const content = res.data;
                this.setState({content});
            })
    }

    render() {
        var data = this.state.content;
        if (data === undefined || data.length === 0 ) {
            return <p/>;
        }
        // TODO: Send real data
        return TreeMapChart({parents: data["parents"], labels: data["labels"], values: data["values"]})
    }
}