import * as React from 'react'

import { Member } from '../components/Member'

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <Member name='Hello' />
      </div>
    )
  }
}

export default App
