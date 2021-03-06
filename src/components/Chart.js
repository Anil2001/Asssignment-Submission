import React, {Component} from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Malic Acid'],

        datasets:[
          {
            labels:'Alcohol',
            data:[
              617594,

            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',

            ]
          }
        ]
      }
    }
  }

  render(){
    return(
      <div className="chart">
      <Bar
        data={this.state.chartData}
        options={{
          title:{
            display:true,
            text:'Largest City In India'
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
      </div>
    )
  }
}

export default Chart;
