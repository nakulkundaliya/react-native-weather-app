import React from 'react';
import { Provider } from 'react-redux';

import store from './src/Redux/store';
import ApplicationNavigator from './src/Navigators/StackNavigators';

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
};

export default App;
