import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { actionHeaderTitle } from '../actions/optAddict'
import { DATA_MANGA_LIST, SETTING_MANGA, FEED_MANGA } from '../actions/type'
import { _doCallListMangta } from '../actions/optAddict'
// import Orientation from 'react-native-orientation';

const numColumns = Dimensions.get('window').width > Dimensions.get('window').height ? 4 : 3
class Manga extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title'),
  });

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { headerTitle, navigation, _actionListManga } = this.props
    navigation.setParams({ 
        title: headerTitle.manga
    });

    _doCallListMangta().then((dataSnapShot) => {
      let dataManga = dataSnapShot.toJSON()
      _actionListManga(dataManga)
    })
  }
  
  _keyExtractor = (item) => item.name;

  viewManga = (keyID) => {
    const { dataListManga, navigation, _actionSettingManga, settingManga, _actionFeedManga } = this.props
    settingManga.keyID = keyID
    _actionSettingManga(settingManga)
    _actionFeedManga(dataListManga[keyID].feed)
    navigation.navigate('ViewManga')
  }

  formatData = (numColumns) => {
    const { dataListManga } = this.props
    const numberOfFullRows = Math.floor(Object.keys(dataListManga).length / numColumns);
    let numberOfElementsLastRow = Object.keys(dataListManga).length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      dataListManga.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
    return dataListManga;
  };

  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={ () => this.viewManga(index) } >
        <View
          style={styles.item}
        >
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
        <ScrollView style={styles.container}>
          <FlatList
            data={ this.formatData(numColumns) }
            keyExtractor={ this._keyExtractor }
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={numColumns}
          />
          {/* { dataListManga.map((value, index) => {
              return <TouchableOpacity key={ index } onPress={ () => this.viewManga(index) } >
                <CardManga chapter={ value.name }  />
              </TouchableOpacity>
          }) } */}
        </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { headerTitle, dataListManga, settingManga } = state.optState
  return {
    headerTitle,
    dataListManga,
    settingManga
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionHeaderTitle,
  _actionListManga: (dataListManga) => dispatch({
    type: DATA_MANGA_LIST,
    dataListManga
  }),
  _actionSettingManga: (settingManga) => dispatch({
    type: SETTING_MANGA,
    settingManga
  }),
  _actionFeedManga: (feedImage) => dispatch({
    type: FEED_MANGA,
    feedImage
  })
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 2,
  },
  item: {
    backgroundColor: '#fffde7',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#000',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Manga)