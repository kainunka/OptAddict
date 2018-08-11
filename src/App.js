import React, {Component} from 'react';
import { Provider } from 'react-redux'
import configStore from './config/configStore'
import { createStackNavigator } from 'react-navigation'
import Addict from './screen/Addict'
import Manga from './screen/Manga'
import Anime from './screen/Anime'

const RootStack = createStackNavigator({
  Addict: {
    screen: Addict
  },
  Manga: {
    screen: Manga
  },
  Anime: {
    screen: Anime
  }
});

class App extends Component {
  store = configStore()
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={ this.store }>
        <RootStack />
      </Provider>
    );
  }
}

export default App