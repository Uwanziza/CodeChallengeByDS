import React from 'react'
import {Line } from 'react-chartjs-2'


const LineChart =()=>{
    const state={
        labels:["Jan","Feb","March","April","May","June","July","Augst","Sept ","oct","Nov","Dec"],
        datasets:[
            {
              label:"Mentee rigistration trend",
              backgroundColor:"gray",
              borderColor:"white",
              fill:true,
              borderWidth:"2",
              pointBorderColor:"lightbrown",
              pointBorderWidth:5,
              pointRadius:8,
              tension:0.4,
              data:[0,40,80,160,240],
            }
        ]
    };
    const options ={
        scales:{
            yAxes:[
                {
                ticks:{
                  beginAtZero:true,  
                },
                },
            ],
        },
    };

    return(
        <div>
           <Line state={state} options={options} />
        
              
            
        </div>
    )
}
export default LineChart;
