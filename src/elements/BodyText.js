import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class BodyText extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <View>
        <Text style={styles.text}>
          {children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#DDD',
    backgroundColor: '#eee',
  },
});

// 他のクラスでImportするため
export default BodyText;
