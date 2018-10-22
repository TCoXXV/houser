import React, { Component } from 'react';
import './App.css';
// import Dashboard from './component/Dashboard/Dashboard';
// import Wizard from './component/Wizard/Wizard';
import Header from './component/Header/Header';
import routes from './routes.js';
// import { Link } from 'react-router-dom';

class App extends Component {



  
  render() {
    return (
      <div className="App">
        <Header/>
        
       {/* <Link to='/' className='links'><button>Cancel</button></Link>  */}
       {/* wizard */}
       {/* <Link to='/wizard' className='links'><button>Add New Property</button></Link>  */}
        {/* <Dashboard/>
        <Wizard/> */}
        {routes}
      </div>
    );
  }
}

export default App;
