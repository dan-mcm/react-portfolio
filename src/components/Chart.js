import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import styled from "styled-components";

const Border = styled.div`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2.5px solid grey;
`;

class Chart extends Component {
  getChartData() {
    return {
      labels: [
        "React/JSX",
        "Python",
        "JavaScript",
        "Java",
        "MySQL/Postgres",
        "Bash",
        "Scala",
        "PHP"
      ],
      datasets: [
        {
          label: "Dan at a Glance",
          data: [30, 20, 15, 15, 10, 10, 5, 5],
          backgroundColor: [
            "rgba(4, 54, 84, 0.7)",
            "rgba(28, 112, 78, 0.7)",
            "rgba(25, 149, 104, 0.7)",
            "rgba(116, 161, 97, 0.7)",
            "rgba(153, 148, 194, 0.7)",
            "rgba(237, 179, 20, 0.7)",
            "rgba(194, 63, 118, 0.7)",
            "rgba(186, 22, 63, 0.7)"
          ]
        }
      ]
    };
  }

  render() {
    return (
      <Border className="white">
        <Doughnut
          data={this.getChartData}
          options={{
            title: {
              display: true,
              text: "Dan's Skills",
              fontSize: 25,
              fontColor: "darkred"
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </Border>
    );
  }
}

export default Chart;
