import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwsome');

class CircleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    // メインの方からStyle変数を与えることができるようになる
    // MemoDetailScreenからstyles.editButtonを抜き出してる感じ？
    const {
      name,
      color,
      style,
      onPress,
    } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      // 先にCircleButtonのスタイルを適用したあと、styleのスタイルを上書き保存する
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded ? (
              <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}

export default CircleButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 48,
    height: 48,
    bottom: 32,
    right: 32,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    color: '#fff',
  },
});
