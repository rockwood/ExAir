import React, { Component, PropTypes }  from 'react';
import { LineChart, Line, CartesianGrid, YAxis } from "recharts";

class LineGraph extends Component {
  render() {
    let { data } = this.props;
    return (
      <LineChart width={1140} height={400} data={data}>
        <YAxis dataKey="value"/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="value" stroke="#8884d8" isAnimationActive={false} />
      </LineChart>
    )
  }
}

LineGraph.propTypes = {
  data: React.PropTypes.array
};

export default LineGraph;
