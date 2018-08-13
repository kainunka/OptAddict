import {  createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import React, {Component} from 'react';
import { View, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Provider } from 'react-redux'
import configStore from './config/configStore'
import Setting from './_global/Setting'
import Drawer from './_global/Drawer'
import Addict from './screen/Addict'
import Manga from './screen/Manga'
import Anime from './screen/Anime'
import ViewManga from './components/ViewManga'

const IconMenu = (navigation) => ( 
  <TouchableOpacity onPress={ () => navigation.toggleDrawer() }>  
    <Icon name="bars" size={30} color="#424242" style={{ marginLeft: 10 }} />
  </TouchableOpacity> 
)

const navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam('title'),
  headerLeft: IconMenu(navigation),
  headerStyle: {
    backgroundColor: '#fbc02d'
  },
  headerTitleStyle: {
    flex: 1, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginLeft: Platform.OS == "ios" ? 0 : -40
  }
})

const AddictStack = createStackNavigator({
  Addict: {
    screen: Addict,
    navigationOptions
  }
})

const MangaStack = createStackNavigator({
  Manga: {
    screen: Manga,
    navigationOptions
  }
})

const AnimeStack = createStackNavigator({
  Anime: {
    screen: Anime,
    navigationOptions
  }
})

const SettingStack = createStackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions
  }
})

const ViewMangaStack = createStackNavigator({
  ViewManga: {
    screen: ViewManga,
    navigationOptions: {
      header: null
    }
  }
})


const RootStack = createBottomTabNavigator({
  MANGA: {
    screen: MangaStack
  },
  ANIME: {
    screen: AnimeStack
  },
  ADDICT: {
    screen: AddictStack
  }
},{
  tabBarOptions: {
    style: {
      backgroundColor: '#232323'
    },
    labelStyle: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#ffffff'
    },
    tabStyle: {
      width: 100,
    }
  }
});

const Apps = createDrawerNavigator({
  Index: {
    screen: RootStack,
  },
  Setting: {
    screen: SettingStack,
  },
  ViewManga: {
    screen: ViewMangaStack
  }
},
{
  initialRouteName: 'Index',
  drawerWidth: 250,
  drawerBackgroundColor: 'transparent',
  contentComponent: Drawer
}
);

class App extends Component {
  store = configStore()

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={ this.store }>
        <View style={{ flex: 1 }}>
          <Apps />
        </View>
      </Provider>
    );
  }
}

export default App