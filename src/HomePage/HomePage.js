import React, { useState, useEffect } from 'react';
import JsChart from "../JsChart/JsChart";
import axios from 'axios';
import D3Chart from '../D3Chart/D3Chart';


function HomePage() {

    const [chartData, setChartData] = useState({});
    const [D3chartData, D3setChartData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);   

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:3030/budget');
          
            let theBudget = response.data.theBudget       

            let clabels = theBudget.map(item => item.title);
            let cdata = theBudget.map(item => item.budget);

            const doughnutData = {
                labels: clabels,
                datasets: [{
                    data: cdata,
                    borderWidth: 1,
                    backgroundColor: ["#FF5733", "#FFC133", "#DBFF33", "#4CFF33", "#33FF99", "#33C6FF", "#9933FF"]
                }]
            };

            const d3data = clabels.map(function(label, index){
                return {
                    label: label,
                    value: cdata[index]
                }
            }
        );
            D3setChartData(d3data);
            setChartData(doughnutData);
            setLoading(false);
    
          } catch (error) {
            console.error("Error fetching the chart data!", error);
            setLoading(false);
          }
        };
        fetchData();
    }, []);



  return (
    <div className="HomePage">
      <main className="container center">

        <div className="page-area">

            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>

            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>

            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>

            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>

            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>

            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>

            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>

            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>

            

            {!loading && !error && <JsChart data={chartData}/>}

            {!loading &&  <D3Chart data={D3chartData}/>}
        
            

        </div>




        </main>

    </div>
  );
}

export default HomePage;
