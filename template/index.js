import { AppRegistry, LogBox } from 'react-native'
import 'react-native-gesture-handler'
import 'react-native-get-random-values'
import { name as appName } from './app.json'
import App from './src/App'
LogBox.ignoreLogs([
  // See: https://github.com/react-navigation/react-navigation/issues/7839
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
])

AppRegistry.registerComponent(appName, () => App)
