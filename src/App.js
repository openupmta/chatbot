import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='content'>
          <Header />
          <Home />
          <Chatbot />        
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
