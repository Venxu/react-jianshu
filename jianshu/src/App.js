import React from 'react';
import './style'
import Header from './common/Header/index'
import store from './store/index'
import {Provider} from 'react-redux'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <Header></Header>
     </Provider>
    </div>
  );
}

export default App;
