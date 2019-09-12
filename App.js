import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';


const App = createStackNavigator({
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
  Login:      { screen: LoginScreen },
  Sigunup:    { screen: SignupScreen },
}, { // デフォルト設定(全てに適用)
  defaultNavigationOptions: {
    headerTitle: 'Memot',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default createAppContainer(App);

/* 過去のもの
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <SignupScreen />
      </View>
    );
  }
}
*/
