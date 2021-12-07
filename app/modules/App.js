import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from '../redux/Store';
import RootContainer from './RootContainer';

const App = () => {
  return (
    <Provider store={reduxStore.store}>
      <PersistGate loading={null} persistor={reduxStore.persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
};
export default App;
