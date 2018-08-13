import React, {Component} from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { actionHeaderTitle, _doCallDetailMangta } from '../actions/optAddict'
import GridView from 'react-native-super-grid';
import { DATA_MANGA_DETAIL, SETTING_MANGA } from '../actions/type'

class DetailManga extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title'),
  });

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { _actionDetailManga, settingManga, dataListManga, navigation } = this.props
    _doCallDetailMangta(settingManga.keyDetail).then((dataSnapShot) => {
        let dataDetail = dataSnapShot.toJSON()
        _actionDetailManga(dataDetail)

        navigation.setParams({ 
            title: `${dataListManga[settingManga.keyDetail].name} Manga`
        });
    })

  }

  viewManga = (keyID) => {
    const { navigation, _actionSettingManga, settingManga } = this.props
    settingManga.keyFeed = keyID
    _actionSettingManga(settingManga)
    navigation.navigate('ViewManga')
  }

  render() {
    const { dataDetailManga } = this.props
    return (
        Object.keys(dataDetailManga).length ?
        <ScrollView style={styles.container}>
          <GridView
            itemDimension={ 105 }
            items={ dataDetailManga.chapter }
            style={styles.gridView}
            renderItem={(item, index) => (
              <TouchableOpacity key={ index } onPress={ () => this.viewManga(index) } >
                <View style={[styles.itemContainer, { backgroundColor: '#fffde7' }]}>
                  <Text style={styles.itemCode}>ตอนที่ {item.chapter}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
        : null
    );
  }
}

const mapStateToProps = (state) => {
  const { settingManga, dataDetailManga, dataListManga } = state.optState
  return {
    settingManga,
    dataDetailManga,
    dataListManga
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionHeaderTitle,
  _actionDetailManga: (dataDetailManga) => dispatch({
    type: DATA_MANGA_DETAIL,
    dataDetailManga
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailManga)