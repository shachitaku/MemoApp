import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  // ここに書いてもMemoListに渡らないから、MemoList↙︎に渡さなきゃいけない
  // this.props.navigation.navigate('MemoDetail');
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <MemoList navigation={navigation} />
        <CircleButton name="plus" onPress={() => { navigation.navigate('MemoEdit'); }} />
      </View>
    );
  }
}

export default MemoListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});
