import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/nav/Header';
// import Contacts from './components/layout/Contacts';
import { Provider } from './Context';
import CustomRouter from './components/CustomRouter'
  
class App extends Component {
  render (){
    return ( 
      <Provider>
      <div className="App">
        <Header/>
       <div className="container">
         <CustomRouter/>
       </div>
      </div>
      </Provider>
    );

  }
}

export default App;
