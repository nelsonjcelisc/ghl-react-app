/*
*    main.js
*/

var parseTime = d3.timeParse("%d/%m/%Y");
var formatTime = d3.timeFormat("%d/%m/%Y");
var parseTimeDS = d3.timeParse("%Y-%m-%d");
/* http://54.191.81.61:5001/dashboard 
* 
/solicitudes/data/datasolicitudescompleto.csv*/
d3.csv("http://54.191.81.61:5001/dashboard").then(function(data){
    category = "area";

    data.map(function(d){
        d.call_revenue = +d.cantidad
        d.units_sold = +d.cantidad
        d.call_duration = +d.cantidad
        d.date = parseTimeDS(d.date)
        d["cant"] = +d["cantidad"];
        d["date"] = parseTimeDS(d["systementrydate"])
        return d
    })

    allData = data.sort(function(x, y){
        return d3.ascending(x.systementrydate, y.systementrydate);
        });
    hotelData = allData;
    filteredData = allData;

    //calls = filteredData;

    nestedData = d3.nest()
        .key(function(d){
            return d[category];
        })
        .entries(filteredData)

    donut = new DonutChart("#company-size","requesttype", "affectedservice", "Afectación de servicio")
    donutpolaridad = new DonutChart("#company-size","requesttype", "problema", "Solicitudes problema")

    revenueBar = new BarChart("#revenue", "area", "cant", "solicitudes por área", ["Telefono/Guest Service","Botones","Room Service","Mantenimiento","Habitaciones","Lavanderia","Recepcion y Caja","Seguridad","Otros","Minibares"])
    //durationBar = new BarChart("#call-duration", "call_duration", "Average call duration (seconds)")
    //unitBar = new BarChart("#units-sold", "units_sold", "Units sold per call")

    stackedArea = new StackedAreaChart("#stacked-area","cant", "incidentstatus", "Status solicitudes")

    timeline = new Timeline("#timeline")

    $("#var-select").on("change", function(){
        changeHotel();
    })
})



function brushed() {
    var selection = d3.event.selection || timeline.x.range();
    var newValues = selection.map(timeline.x.invert)
    changeDates(newValues)
}

function changeDates(values) {
    hotel = $("#var-select").val();
    hotelData = allData.filter(function(d){
        return ((d.date > values[0]) && (d.date < values[1]))
    });
    filteredData = allData.filter(function(d){
        return ((d.date > values[0]) && (d.date < values[1]) && (d.hotel == hotel || hotel == "Todos"))
    });

    nestedData = d3.nest()
        .key(function(d){
            return d[category];
        })
        .entries(filteredData)

    $("#dateLabel1").text(formatTime(values[0]))
    $("#dateLabel2").text(formatTime(values[1]))

    donut.wrangleData(filteredData);
    donutpolaridad.wrangleData(filteredData);
    revenueBar.wrangleData();
    //unitBar.wrangleData();
    //durationBar.wrangleData();
    stackedArea.wrangleData(filteredData);
}

function changeHotel() {
    hotel = $("#var-select").val();
    filteredData = hotelData.filter(function(d){
        return (d.hotel == hotel || hotel == "Todos");
    });

    nestedData = d3.nest()
        .key(function(d){
            return d[category];
        })
        .entries(filteredData)

    //$("#dateLabel1").text(formatTime(values[0]))
    //$("#dateLabel2").text(formatTime(values[1]))

    donut.wrangleData(filteredData);
    donutpolaridad.wrangleData(filteredData);
    revenueBar.wrangleData();
    //unitBar.wrangleData();
    //durationBar.wrangleData();
    stackedArea.wrangleData(filteredData);
}