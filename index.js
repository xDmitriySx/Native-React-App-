import {AppRegistry} from 'react-native'
import MainStore from './MainStore'
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => MainStore)

