import React, { Component, PropTypes }  from 'react';
import LineGraph from 'components/line-graph';
import PieGraph from 'components/pie-graph';
const { console } = window;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    let { socket } = this.props
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
      <div className="row">
        <div className="col-md-12">
          <LineGraph data={data} />
        </div>

        <div className="col-md-6">
          <PieGraph data={data} />
        </div>

        <div className="col-md-6">
          <PieGraph data={data} />
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  socket: React.PropTypes.object
};

export default Main;
