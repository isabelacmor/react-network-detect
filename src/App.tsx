import * as React from 'react';
import NetworkDetect from './NetworkDetect';

class App extends React.Component {
  public render() {
    return (
      <NetworkDetect>
        <span>child</span>
        <span>child 2</span>
      </NetworkDetect>
    );
  }
}

export default App;
