import React from 'react';
import Plot from "react-plotly.js/react-plotly";

export default function TreeMapChart(props) {
    const {parents, labels, values} = props;
    const length = parents.length
    if (labels.length !== length || values.length !== length) {
        return <p/>
    }

    const data = {
        type: "treemap",
        parents: parents,
        labels: labels,
        values: values,
        textinfo: "label+value+text",
        text: values.map(v => ((v * 100) / values[0]).toFixed(2) + "% del total"),
        textposition: "middle center",
        textfont: {size: 20, color: "white"},
        tiling: {packing: "squarify"}
    }

    const layout = {
        width: 1000,
        height: 800,
    }

    return <Plot data={[data]} layout={layout}/>
}