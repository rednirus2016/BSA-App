import { View, Text ,LogBox} from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './Navigation/Routes'
import store from './store';
import { Provider } from 'react-redux';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </Provider>
  )
}
export default App;
