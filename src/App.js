import React, {Component} from 'react';
import { Provider } from 'react-redux'
import configStore from './config/configStore'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Addict from './screen/Addict'
import Manga from './screen/Manga'
import Anime from './screen/Anime'

const AddictStack = createStackNavigator({
  Addict: {
    screen: Addict
  }
})

const MangaStack = createStackNavigator({
  Manga: {
    screen: Manga
  }
})

const AnimeStack = createStackNavigator({
  Anime: {
    screen: Anime
  }
})

const RootStack = createBottomTabNavigator({
  Addict: {
    screen: AddictStack
  },
  Manga: {
    screen: MangaStack
  },
  Anime: {
    screen: AnimeStack
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