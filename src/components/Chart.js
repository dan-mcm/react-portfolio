import React, { Component } from "react";
import styled from "styled-components";
import { Cell, PieChart, Pie, Sector } from "recharts";

const Wrapper = styled.div`
  margin: 0 auto;
`;

const data = [
  {name: "React/JSX", value: 30},
  {name: "Python", value: 30},
  {name: "JavaScript", value: 15},
  {name: "Scala", value: 15},
  {name: "Java", value: 10},
  {name: "SQL/Redis", value: 10},
  {name: "Bash", value: 5},
  {name: "PHP", value: 5}
];


const COLORS = ["#002642", "#8C271E", "#12100E", "#750D37"];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Confidence Value ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <Wrapper>
        <PieChart width={600} height={400}>
        <Pie
        	activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={300}
          cy={200}
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          onMouseEnter={this.onPieEnter}
          paddingAngle={5}
        >
        {data.map((entry, index) => (
          <Cell fill={COLORS[index % COLORS.length]} />
        ))}
        </Pie>
       </PieChart>
      </Wrapper>
    );
  }
}

export default Chart;
