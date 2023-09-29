import React from 'react';
import { Doughnut  } from 'react-chartjs-2'; // Import Doughnut instead of Line


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

function JsChart(props) {

    if (!props.data) return null;

    return (
        <div id="jschart">
            <h1>My Budget</h1>
          <Doughnut data={props.data} options={{ responsive: true, legend: { display: true } }} />
        </div>
    );
}

export default JsChart;
