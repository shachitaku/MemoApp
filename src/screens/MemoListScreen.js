import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  handlePress() {
    const db = firebase.firestore();

    console.log('hi');

    const ref = firebase.firestore().collection('messages');
    console.log(ref);

    db.collection('memos').add({
      body: 'test memo',
      createdOn: '2017-12-12',
    })
      .then((docRef) => {
        console.log(docRef.id);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // ここに書いてもMemoListに渡らないから、MemoList↙︎に渡さなきゃいけない
  // this.props.navigation.navigate('MemoDetail');
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <MemoList navigation={navigation} />
        <CircleButton
          name="plus"
          onPress={this.handlePress.bind(this)}
        />

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
