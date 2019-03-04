import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NetworkDetect from './NetworkDetect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NetworkDetect />, div);
  ReactDOM.unmountComponentAtNode(div);
});
