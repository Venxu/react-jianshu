import React from 'react';
import './style'
import Header from './common/Header/index'
import store from './store/index'
// Provider里的组件都有能力使用store里数据
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../src/views/home/index'
import Detail from '../src/views/detail/loadable'
import Login from '../src/views/login/index'
import Write from '../src/views/write/index'



function App() {

  return (
    <div className="App">
      <Provider store={store}>
 
        
          <BrowserRouter>
            <div>
              <Header></Header>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              {/* <Route path='/detail' exact component={Detail}></Route> */}
            </div>

          </BrowserRouter>
          
    

      </Provider>
    </div>
  );
}

export default App;
