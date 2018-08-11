import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { actionHeaderTitle } from '../actions/optAddict'

class Addict extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title'),
  });

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { headerTitle, navigation } = this.props
    navigation.setParams({ 
        title: headerTitle.addict
    });
  }

  render() {
    const { headerTitle, navigation } = this.props

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={ () => navigation.navigate('Manga') }>
                <Text style={styles.welcome}>{ headerTitle.addict }</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { headerTitle } = state.optState
  return {
    headerTitle
  }
}

const mapDispatchToProps = {
  actionHeaderTitle
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Addict)