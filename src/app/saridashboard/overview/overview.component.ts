import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
Highcharts: typeof Highcharts = Highcharts;
influenzatypesdistributionchartOptions: Highcharts.Options = {

  chart: {
    type: "pie",
  },
  plotOptions: {
    pie: {
      innerSize: "50%", // Adjust the innerSize to control the size of the inner hole (donut hole)
      depth: 45, // Adjust the depth to control the thickness of the donut
      dataLabels: {
        enabled: false, // Disable data labels inside the donut segments
      },
    },
  },
  title: {
    text: "Influenza Types Distribution",
  },
  colors: [
    "#FF0000",
    "green", 
  ],
  
  // series: [
  //   {
  //   name: "Data",
  //     data: [
  //       ["Posivite", 20],
  //       ["Negative", 30],
  //     ], // Replace with your data values
  //   },
  // ],
  
}

}
