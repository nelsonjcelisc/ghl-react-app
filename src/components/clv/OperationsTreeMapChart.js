import React from "react";
import axios from "axios";
import TreeMapChart from "./TreeMapChart";

export default class OperationsTreeMapChart extends React.Component {
    state = {
        content: []
    }

    componentDidMount() {
        //TODO fix url
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const content = res.data;
                this.setState({content});
            })
    }

    render() {
        var x = {
            "labels": [
                "Hotel  67",
                "About To Sleep",
                "At Risk",
                "Cannot Lose Them",
                "Champions",
                "Hibernating customers",
                "Lost customers",
                "Loyal",
                "Need Attention",
                "New Customers",
                "Potential Loyalist",
                "Promising"
            ],
            "parents": [
                "",
                "Hotel  67",
                "Hotel  67",
                "Hotel  67",
                "Hotel  67",
                "Hotel  67",
                "Hotel  67",
                "Hotel  67",
                "Hotel  67",
                "Hotel  67",
                "Hotel  67",
                "Hotel  67"
            ],
            "values": [
                449291,
                31271,
                9029,
                74421,
                1019,
                51146,
                30791,
                2425,
                10615,
                69679,
                23941,
                144954
            ]
        }
        // TODO: Send real data
        return TreeMapChart({parents: x["parents"], labels: x["labels"], values: x["values"]})
    }
}