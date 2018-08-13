import React, {Component} from 'react';
import { StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { actionHeaderTitle } from '../actions/optAddict'
import { Card } from 'react-native-elements'

class CardManga extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { feedImage, chapter } = this.props
    return (
        <Card
            style={{ flex: 1 }}
            title='Onepiece'
            image={{ uri: 'https://i.imgur.com/OGtyWov.jpg' }}>
            <Text style={{marginBottom: 10}}>
                { chapter }
            </Text>
        </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { feedImage } = state.optState
  return {
    feedImage
  }
}

const mapDispatchToProps = {
  actionHeaderTitle
}

const styles = StyleSheet.create({

});

export default connect(mapStateToProps, mapDispatchToProps)(CardManga)