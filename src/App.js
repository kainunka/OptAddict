import React, {Component} from 'react';
import { Provider } from 'react-redux'
import configStore from './config/configStore'
import OptAddict from './index'

class App extends Component {
  store = configStore()
  constructor(props) {
    super(props)
  }
  render() {
    const { headerTitle } = this.props

    return (
      <Provider store={ this.store }>
        <OptAddict />
      </Provider>
    );
  }
}

export default App