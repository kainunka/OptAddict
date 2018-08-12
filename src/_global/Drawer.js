import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';

class Drawer extends Component {
  constructor(props) {
    super(props)
  }

  _goToHome() {
    const { navigation } = this.props
    navigation.navigate('Index')
  }

  _goToSetting() {
    const { navigation } = this.props
    navigation.navigate('Setting')
  }

  render() {
    return (
        <LinearGradient colors={['rgba(0, 0, 0, 0.3)', 'rgba(0,0,0, 0.5)', 'rgba(0,0,0, 0.7)']} style={styles.linearGradient}>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.drawerList}>
                        <TouchableOpacity onPress={ () => this._goToHome() }>
                            <View style={styles.drawerListItem}>
                                <Icon name="home" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 2 }]} />
                                <Text style={styles.drawerListItemText}>
                                    Home
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => this._goToSetting() }>
                            <View style={styles.drawerListItem}>
                                <Icon name="wrench" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 2 }]} />
                                <Text style={styles.drawerListItemText}>
                                    Setting
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		paddingLeft: 25,
		justifyContent: 'center'
    },
    drawerList: {
        marginTop: 50
    },
	drawerListIcon: {
		width: 27
	},
	drawerListItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 23
	},
	drawerListItemText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 23,
		paddingLeft: 15,
		flex: 1
	},
	linearGradient: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
	},
	imageUrl: {
		width: 50,
		height: 50
	},
	viewTop: {
		marginTop: 20
	}
});

export default Drawer