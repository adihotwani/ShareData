import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { store, persitor } from './src/redux/store';
import Config from 'react-native-config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "471135862092-9i631v37oufem40ekvnl6k9mrimlemro.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persitor} >
          <StatusBar backgroundColor="#fff"/>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;