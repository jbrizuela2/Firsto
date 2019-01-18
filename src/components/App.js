import React, { Component } from 'react';
import Home from './Home/Home'
import Header from '../shared/components/layout/Header/Header'
import Content from '../shared/components/layout/Content/Content'
import Footer from '../shared/components/layout/Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="PadreNuestro.com"/>
        <Content> 
          <Home /> 
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;

