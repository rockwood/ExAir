import React, { Component, PropTypes }  from 'react';
import { LineChart, Line } from "recharts";
const { console } = window;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    let { socket } = this.props
    socket.connect();
    let channel = socket.channel('sensors:button', {});
    this.subscribeToChannel(channel);
  }

  subscribeToChannel(channel) {
    channel.join()
           .receive("ok", () => { console.log('Join Success') })
           .receive("error", () => { console.log('Error') })

    channel.on("change", (payload) => {
      let datum = { name: "sensor", value: payload.value };
      this.setState({ data: this.state.data.concat([datum])})
    })
  }

  render() {
    let { data } = this.state;
    return (
      <LineChart width={730} height={250} data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" isAnimationActive={false} />
      </LineChart>
    )
  }
}

Main.propTypes = {
  socket: React.PropTypes.object
};

export default Main;
