// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { Provider } from 'react-redux'
import store from './store/store'
import AuthRouter from "./router/authRouter"

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <AuthRouter>
            <Router/>
          </AuthRouter>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
