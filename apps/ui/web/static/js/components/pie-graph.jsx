import React, { Component, PropTypes }  from 'react';
import { PieChart, Pie, Tooltip } from "recharts";

class PieGraph extends Component {
  render() {
    let { data } = this.props;
    return (
      <PieChart width={600} height={600}>
        <Pie data={data} cx={200} cy={200} innerRadius={100} outerRadius={160} fill="#8884d8" label isAnimationActive={false}/>
      </PieChart>
    )
  }
}

PieGraph.propTypes = {
  data: React.PropTypes.array
};

export default PieGraph;
