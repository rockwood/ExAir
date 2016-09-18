import '../favicon.ico';
import '../scss/application.scss';
import 'phoenix_html';
import 'phoenix';

import Exair from 'exair';
const { document } = window;

let element = document.querySelector('#exair');
let exair = new Exair();
exair.renderInto(element);
