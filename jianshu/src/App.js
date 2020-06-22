import React from 'react';
import './style'
import Header from './common/Header/index'
import store from './store/index'
// Provider里的组件都有能力使用store里数据
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../src/views/home/index'
import Detail from '../src/views/detail/index'
import Login from '../src/views/login/index'



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
              {/* <Route path='/detail' exact component={Detail}></Route> */}
            </div>

          </BrowserRouter>
          
    

      </Provider>
    </div>
  );
}

export default App;
