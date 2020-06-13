import React from 'react';
import './style'
import Header from './common/Header/index'
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './home/index'
import Detail from './detail/detail'


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>

          </BrowserRouter>
          <Header></Header>
        </div>

      </Provider>
    </div>
  );
}

export default App;
