import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { actionHeaderTitle } from '../actions/optAddict'
import { DATA_MANGA_LIST, SETTING_MANGA } from '../actions/type'
import { _doCallListMangta } from '../actions/optAddict'
import GridView from 'react-native-super-grid';

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

  viewDetail = (keyID) => {
    const { navigation, _actionSettingManga, settingManga } = this.props
    settingManga.keyDetail = keyID
    _actionSettingManga(settingManga)
    navigation.navigate('DetailManga')
  }

  render() {
    const { dataListManga } = this.props
    return (
        <ScrollView style={styles.container}>
          <GridView
            itemDimension={ 105 }
            items={ dataListManga }
            style={styles.gridView}
            renderItem={(item, index) => (
              <TouchableOpacity key={ index } onPress={ () => this.viewDetail(index) } >
                <View style={[styles.itemContainer, { backgroundColor: '#fffde7' }]}>
                  <Text style={styles.itemCode}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
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
  })
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#ccc',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#494949',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Manga)