import React, {Component} from 'react';
import Navbar from './components/ui/navbar/navbar';
import Footer from './components/ui/footer/footer';
import Root from './pages/root';

import './assets/scss/main.scss';

class App extends Component {
    render() {
      return (
        <div>
          <Navbar/>
          <Root/>
          <Footer/>
        </div>
      );
    }
  }
  
export default App;