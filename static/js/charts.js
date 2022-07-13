function get_chart_data(node_id) {
    const base_url = window.location.origin;

    // ajax call
    $.get(base_url + "/nodes/get_chart/" + node_id, function (data) {
        // console.log(data);

        const x_label = [];
        const temperature = [];
        const humidity = [];
        const LWS = []
        const soil_temperature = []
        const soil_moisture = []
        const battery_status = []

        for (const key in data) {
            x_label.push(data[key].fields.created_at);
            temperature.push(data[key].fields.temperature);
            humidity.push(data[key].fields.humidity);
            LWS.push(data[key].fields.LWS);
            soil_temperature.push(data[key].fields.soil_temperature);
            soil_moisture.push(data[key].fields.soil_moisture);
            battery_status.push(data[key].fields.battery_status);
        }

        // console.log(x_label, temperature, humidity, LWS, soil_temperature, soil_moisture, battery_status);

        const ctx1 = document.getElementById('myChart1').getContext('2d');
        const ctx2 = document.getElementById('myChart2').getContext('2d');
        const ctx3 = document.getElementById('myChart3').getContext('2d');
        const ctx4 = document.getElementById('myChart4').getContext('2d');
        const ctx5 = document.getElementById('myChart5').getContext('2d');
        const ctx6 = document.getElementById('myChart6').getContext('2d');

        $("#myChart1_title").text('Temperature');
        const graph_data1 = {
            type: 'line',
            data: {
                labels: x_label,
                datasets: [{
                    label: 'Temperature',
                    data: temperature,
                    // backgroundColor: ['rgba(251, 9, 9, 0.8)',],
                    borderColor: ['blue',],
                    borderWidth: 3
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        $("#myChart2_title").text('Humidity');
        const graph_data2 = {
            type: 'line',
            data: {
                labels: x_label,
                datasets: [{
                    label: 'Humidity',
                    data: humidity,
                    borderColor: ['blue',],
                    borderWidth: 3
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        $("#myChart3_title").text('LWS');
        const graph_data3 = {
            type: 'line',
            data: {
                labels: x_label,
                datasets: [{
                    label: 'LWS',
                    data: LWS,
                    borderColor: ['blue',],
                    borderWidth: 3
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        $("#myChart4_title").text('Soil Temperature');
        const graph_data4 = {
            type: 'line',
            data: {
                labels: x_label,
                datasets: [{
                    label: 'Soil Temperature',
                    data: soil_temperature,
                    borderColor: ['blue',],
                    borderWidth: 3
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        $("#myChart5_title").text('Soil Moisture');
        const graph_data5 = {
            type: 'line',
            data: {
                labels: x_label,
                datasets: [{
                    label: 'Soil Moisture',
                    data: soil_moisture,
                    borderColor: ['blue',],
                    borderWidth: 3
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        $("#myChart6_title").text('Battery Status');
        const graph_data6 = {
            type: 'line',
            data: {
                labels: x_label,
                datasets: [{
                    label: 'Battery Status',
                    data: battery_status,
                    borderColor: ['blue',],
                    borderWidth: 3
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        const myChart1 = new Chart(ctx1, graph_data1);
        const myChart2 = new Chart(ctx2, graph_data2);
        const myChart3 = new Chart(ctx3, graph_data3);
        const myChart4 = new Chart(ctx4, graph_data4);
        const myChart5 = new Chart(ctx5, graph_data5);
        const myChart6 = new Chart(ctx6, graph_data6);


        const newGraphData1 = graph_data1.data.datasets[0].data;
        const newGraphData2 = graph_data2.data.datasets[0].data;
        const newGraphData3 = graph_data3.data.datasets[0].data;
        const newGraphData4 = graph_data4.data.datasets[0].data;
        const newGraphData5 = graph_data5.data.datasets[0].data;
        const newGraphData6 = graph_data6.data.datasets[0].data;

        newGraphData1.shift();
        newGraphData1.push();

        newGraphData2.shift();
        newGraphData2.push();

        newGraphData3.shift();
        newGraphData3.push();

        newGraphData4.shift();
        newGraphData4.push();

        newGraphData5.shift();
        newGraphData5.push();

        newGraphData6.shift();
        newGraphData6.push();
    });
}