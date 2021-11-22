/*
*    stackedAreaChart.js
*/

StackedAreaChart = function(_parentElement, _variable, _attrib, _tittle){
    this.parentElement = _parentElement;
    this.variable = _variable;
	this.attrib = _attrib;
	this.tittle = _tittle

    this.initVis();
};

StackedAreaChart.prototype.initVis = function(){
    var vis = this;

    vis.margin = { left:80, right:100, top:50, bottom:40 };
    vis.height = 370 - vis.margin.top - vis.margin.bottom;
    vis.width = 800 - vis.margin.left - vis.margin.right;

    vis.svg = d3.select(vis.parentElement)
        .append("svg")
        .attr("width", vis.width + vis.margin.left + vis.margin.right)
        .attr("height", vis.height + vis.margin.top + vis.margin.bottom);
    vis.g = vis.svg.append("g")
        .attr("transform", "translate(" + vis.margin.left + 
            ", " + vis.margin.top + ")");

    vis.t = () => { return d3.transition().duration(1000); }

    vis.color = d3.scaleOrdinal(d3.schemePastel1);

    vis.x = d3.scaleTime().range([0, vis.width]);
    vis.y = d3.scaleLinear().range([vis.height, 0]);

    vis.yAxisCall = d3.axisLeft()
    vis.xAxisCall = d3.axisBottom()
        .ticks(4);
    vis.xAxis = vis.g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + vis.height +")");
    vis.yAxis = vis.g.append("g")
        .attr("class", "y axis");

    vis.stack = d3.stack()
        .keys(["Eficiente",
        "Estandard",
        "Deficientes",
        "Cerrada No Realizadas",
        "Abierta"]);

    vis.area = d3.area()
        .x(function(d) { return vis.x(parseTime(d.data.date)); })
        .y0(function(d) { return vis.y(d[0]); })
        .y1(function(d) { return vis.y(d[1]); });

    vis.addLegend();

    vis.wrangleData(filteredData);
};


StackedAreaChart.prototype.wrangleData = function(dataTimeFiltered){
    var vis = this;

    //vis.variable = $("#var-select").val()

    vis.dayNest = d3.nest()
        .key(function(d){ return formatTime(d.date); })
        .entries(dataTimeFiltered)

    vis.dataFiltered = vis.dayNest
        .map(function(day){
            return day.values.reduce(function(accumulator, current){
                accumulator.date = day.key;
                accumulator[current[vis.attrib]] = accumulator[current[vis.attrib]] + current[vis.variable];
                return accumulator;
            }, {
                "Eficiente": 0,
                "Estandard": 0,
                "Deficientes": 0,
                "Cerrada No Realizadas": 0,
                "Abierta": 0
            })
        });
    vis.updateVis();
};


StackedAreaChart.prototype.updateVis = function(){
    var vis = this;

    vis.maxDateVal = d3.max(vis.dataFiltered, function(d){
        var vals = d3.keys(d).map(function(key){ return key !== 'date' ? d[key] : 0 });
        return d3.sum(vals);
    });

    // Update scales
    vis.x.domain(d3.extent(vis.dataFiltered, (d) => {  return parseTime(d.date); }));
    vis.y.domain([0, vis.maxDateVal]);

    // Update axes
    vis.xAxisCall.scale(vis.x);
    vis.xAxis.transition(vis.t()).call(vis.xAxisCall);
    vis.yAxisCall.scale(vis.y);
    vis.yAxis.transition(vis.t()).call(vis.yAxisCall);

    vis.teams = vis.g.selectAll(".team")
        .data(vis.stack(vis.dataFiltered));
    
    // Update the path for each team
    vis.teams.select(".area")
        .attr("d", vis.area)

    vis.teams.enter().append("g")
        .attr("class", function(d){ return "team " + d.key })
        .append("path")
            .attr("class", "area")
            .attr("d", vis.area)
            .style("fill", function(d){
                return vis.color(d.key)
            })
            .style("fill-opacity", 0.5)
};


StackedAreaChart.prototype.addLegend = function(){
    var vis = this;

    var legend = vis.g.append("g")
        .attr("transform", "translate(" + (50) + 
                    ", " + (-25) + ")");

    var legendArray = [
        {label: "Deficientes", color: vis.color("Deficientes")},
		{label: "Estandard", color: vis.color("Estandard")},
		{label: "Eficiente", color: vis.color("Eficiente")},
        {label: "No Realizadas", color: vis.color("Cerrada No Realizadas")},
        {label: "Abierta", color: vis.color("Abierta")}
    ]

    var legendCol = legend.selectAll(".legendCol")
        .data(legendArray)
        .enter().append("g")
            .attr("class", "legendCol")
            .attr("transform", (d, i) => {
                return "translate(" + (i * 120) + ", " + (0) + ")"
            });
        
    legendCol.append("rect")
        .attr("class", "legendRect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", d => { return d.color; })
        .attr("fill-opacity", 0.5);

    legendCol.append("text")
        .attr("class", "legendText")
        .attr("x", 20)
        .attr("y", 10)
        .attr("text-anchor", "start")
        .text(d => { return d.label; }); 
}
