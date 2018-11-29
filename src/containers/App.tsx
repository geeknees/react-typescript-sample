import * as React from 'react';

import { Member } from '../components/Member'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Member name='Hello' />
        </p>
      </div>
    );
  }
}

export default App;
