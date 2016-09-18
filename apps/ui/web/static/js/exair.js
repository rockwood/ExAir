import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'containers/main';
import { Socket } from 'phoenix';

export default class Exair {
  renderInto(targetElement) {
    let socket = new Socket("/socket");
    let main = React.createElement(Main, { socket: socket });

    ReactDOM.render(main, targetElement);
  }
}
