import Plot from "react-plotly.js/react-plotly";
import React, {Fragment} from "react";

export default function BarChartGrid(props) {
    const colorScale = [
        '#1f77b4',  // muted blue
        '#ff7f0e',  // safety orange
        '#2ca02c',  // cooked asparagus green
        '#d62728',  // brick red
        '#9467bd',  // muted purple
        '#8c564b',  // chestnut brown
        '#e377c2',  // raspberry yogurt pink
        '#7f7f7f',  // middle gray
        '#bcbd22',  // curry yellow-green
        '#17becf',  // blue-teal
        '#ba671a',  // Light Brown
        '#9d80e5',  // Perrywinkle
        '#069685',  // Approval Green
        '#d9dd66',  // Succulent Lime
        '#6f9b0f',  // Luminescent Green
        '#0882a8',  // Advertising Blue
        '#efa2af',  // Pinque
        '#16bc50',  // Intoxicate
        '#ea731e',  // Orange Gluttony
        '#c4466a',  // Royal Banner
    ]
    const plots = props.data.map(value => {
        const trace = {
            x: value["scores"],
            y: value["words"],
            text: value["scores"].map(value => value.toFixed(4)),
            hoverinfo: 'none',
            marker: {color: colorScale[value["topic"] % colorScale.length]},
            orientation: 'h',
            type: 'bar'
        };

        return {'topic': value["topic"], 'trace': trace};
    });

    let rows = [];
    const col = props.col;
    const row = plots.length / col;
    const colSize = 12 / col;

    let indx = 0
    for (let rr = 0; rr <= row; rr++) {
        let rowContent = []
        for (let cc = 0; cc < col && indx < plots.length; cc++, indx++) {
            const title = 'Tópico ' + plots[indx]["topic"]
            rowContent.push(
                <div className={"col-" + colSize}>
                    <Plot data={[plots[indx]["trace"]]}
                          layout={
                              {
                                  title: {text: title, x: 0.05},
                                  xaxis: {
                                      showgrid: true,
                                      showline: true,
                                      mirror: 'ticks',
                                      gridcolor: '#bdbdbd',
                                      gridwidth: 2
                                  },
                                  yaxis: {
                                      showgrid: true,
                                      showline: true,
                                      mirror: 'ticks',
                                      gridcolor: '#bdbdbd',
                                      gridwidth: 2
                                  }
                              }
                          }
                          style={{width: "100%", margin: 0}}/>
                </div>
            )
        }
        rows.push(
            <div className="row">
                {rowContent}
            </div>);
    }

    return <div>
        <h2>Tópicos más representativos</h2>
        <Fragment>{rows}</Fragment>
    </div>;
}