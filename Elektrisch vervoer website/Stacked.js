// ******************************************************
// ******************************************************
// APIcall function    **********************************
// ******************************************************
// ******************************************************

var APIcall = {
    output: "",
    gqueries: "",

    // Makes a new scenario with title 'My scenario' and 2050 as end year. 
    // Sets APIcall.ID to the id corresponding with the new scenario to adjust settings later.
    newscenario: function(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST","http://beta.et-engine.com/api/v3/scenarios",false);
        var params = '{"scenario": {"title": "My scenario", "end_year": "2050"}}';
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.send(params);
        this.output = xmlhttp.responseText;
        this.ID = JSON.parse(this.output)["id"];
    },

    // Allows the user to update scenario user_values.
    // The input is a hash (object) with the user_values.
    // The functions sets APIcall.output as the responsetext
    changeuservalues: function(hash){
        var string = "";
        var count = 0;
        for(i in hash){
            if(count === 0){
                string = string + '"' + i + '": ';
                string = string + hash[i];   
                count = count + 1;
            }
            else{
                string = string + ', ' + '"' + i + '": ';
                string = string + hash[i];
            };
        };
        string = '{"scenario": {"user_values": {' + string + '}},"detailed": true, "autobalance": true }';      
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PUT","http://beta.et-engine.com/api/v3/scenarios/"+this.ID,false);
        var params = string;
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.send(params);
        this.output = xmlhttp.responseText;
    },

    // Allows the user to request gqueries
    // The input is a list with the desired gqueries
    // Sets APIcall.present/future/keys to the corresponding lists
    gquery: function(list){
        var string = "";
        for(var i = 0; i<list.length; i++){
            if(i === 0){
                string = string + '"' +list[i] + '"';
            }
            else{
                string = string + ', '+ '"' +list[i] + '"';
            };
        };
        string = '{"gqueries": [' + string + '] }';
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PUT","http://beta.et-engine.com/api/v3/scenarios/"+this.ID,false);
        var params = string;
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.send(params);
        this.output = xmlhttp.responseText;
        this.gqueries = JSON.parse(this.output)["gqueries"];
        var gq = JSON.stringify(this.gqueries).replace(/},/g,"},<br>");
        var present = [];
        var future = [];
        var keys = [];
        for(key in APIcall.gqueries){
            APIcall.present = present.push(APIcall.gqueries[key].present);
            APIcall.future = future.push(APIcall.gqueries[key].future);
            APIcall.keys = keys.push(key);
        };
        this.present = present;
        this.future = future;
        this.keys = keys;
    }
};

// ******************************************************
// ******************************************************
// Slider initialize   **********************************
// ******************************************************
// ******************************************************

var SliderValues = {
    ElectricShare: 0,
    FossilEff: 0,
    ElectricEff: 0
};


var Energydata = {
    present: {
        electric: 0,
        fossil: 80,
    },
    future: {
        electric: 30,
        fossil: 10,
    }
};

var Carbondata = {
    present: {
        electric: 10,
        fossil: 90,
    },
    future: {
        electric: 45,
        fossil: 20,
    }
};

// ******************************************************
// ******************************************************
// Slider functions    **********************************
// ******************************************************
// ******************************************************


var updateSliderValues = function(){
    Slidervalues = 
        {ElectricShare: $("#ElectricShare").slider("value"),
        FossilEff: $("#FossilEff").slider("value"),
        ElectricEff: $("#ElectricEff").slider("value")};
};

var updateOutputValues = function(){
    APIcall.changeuservalues(
        {
            "transport_car_using_electricity_share":Slidervalues.ElectricShare,
            "transport_car_using_diesel_mix_efficiency":Slidervalues.FossilEff,
            "transport_car_using_electricity_efficiency": Slidervalues.ElectricEff
        });
    APIcall.gquery([
        "electricity_cars_in_use_of_final_demand_in_transport",         //0 
        "fuel_cars_in_use_of_final_demand_in_transport",                //1
        ]);
    Energydata = {
        present: {
            electric: APIcall.present[0],
            fossil: APIcall.present[1],
        },
        future: {
            electric: APIcall.future[0],
            fossil: APIcall.future[1],
        }
    };
};

var update_tekst = function(ID, value) {
    document.getElementById(ID).innerHTML = value;
}

var updateDisplayValues = function(){
    update_tekst("ElectricShareValue", Slidervalues.ElectricShare);
    update_tekst("FossilEffValue", Slidervalues.FossilEff);
    update_tekst("ElectricEffValue", Slidervalues.ElectricEff);
};

// ******************************************************
// ******************************************************
// Graph functions       ********************************
// ******************************************************
// ******************************************************

var updateChart = function(){
    $('#container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Energiegebruik Vervoer'
            },
            xAxis: {
                categories: ['2012', '2050']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Energiegebruik (PJ)'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -70,
                verticalAlign: 'top',
                y: 20,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: true
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal +
                        ' ('+Math.round(1000*this.point.stackTotal/3200)/10+'%)';
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                },
                series: {
                animation: false
                }

            },
            series: [{
                color: "rgba(179,179,179,1)",
                name: 'Fossiel',
                data: [Math.round(Energydata.present.fossil*10)/10, Math.round(Energydata.future.fossil*10)/10]
            }, {
                color: "rgba(0,64,128,1)",
                name: 'Elektrisch',
                data: [Math.round(Energydata.present.electric*10)/10, Math.round(Energydata.future.electric*10)/10]
            }]
        });
}

// ******************************************************
// ******************************************************
// Document Ready        ********************************
// ******************************************************
// ******************************************************

$(document).ready(function(){

APIcall.newscenario();
updateSliderValues();
updateDisplayValues();
updateOutputValues();

updateChart();

var chart = $('#container').highcharts()

$(".slider").on("slide",function(event,ui){
updateSliderValues();
updateDisplayValues();
})

$(".slider").on("slidechange",function(event,ui){
updateSliderValues();
updateOutputValues();
updateChart();
})

});

