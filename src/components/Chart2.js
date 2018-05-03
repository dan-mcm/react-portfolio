import React, { Component } from "react";
import styled from "styled-components";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

class Chart2 extends Component {
  render() {
    return (
      <div>
        <PieChart width={800} height={200}>
          <Pie
            data={data02}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
            paddingAngle={5}
          >
            {data02.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}

export default Chart2;
