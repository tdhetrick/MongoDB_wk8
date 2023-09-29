import React from 'react';
import Doughnut from './Doughnut';


function D3Chart(props) {

    if (!props.data) return null;

    return (
        <Doughnut data = {props.data}></Doughnut>
    );
}


export default D3Chart;