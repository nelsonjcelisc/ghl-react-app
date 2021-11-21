import Plot from "react-plotly.js/react-plotly";
import React, {Fragment} from "react";

export default function GroupedBarChartGrid(props) {
    if (props.data.length === 0) {
        return <p/>
    }

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
        return {
            x: value["frequency"],
            y: value["service"],
            name: value["topic_name"],
            text: value["words"],
            hoverinfo: value["frequency"],
            marker: {
                color: colorScale[value["topic"] % colorScale.length]
            },
            orientation: 'h',
            type: 'bar'
        };
    });

    return <div className="row">
        <Plot data={plots}
              layout={
                  {
                      title: {text: "Tópicos por servicio afectado", x: 0.05},
                      xaxis: {
                          showgrid: true,
                          showline: true,
                          mirror: 'ticks',
                          gridcolor: '#bdbdbd',
                          gridwidth: 0.5
                      },
                      yaxis: {
                          showgrid: true,
                          showline: true,
                          mirror: 'ticks',
                          gridcolor: '#bdbdbd',
                          gridwidth: 0.5
                      },
                      barmode: 'group'
                  }
              }
              style={{width: props.width, margin: 0}}
        />
    </div>
}