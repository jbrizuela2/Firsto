import React, { Component } from 'react';
import Header from '../shared/components/layout/Header/Header'
import Content from '../shared/components/layout/Content/Content'
import Footer from '../shared/components/layout/Footer/Footer'
import Timer from './Pomodoro/Timer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="PadreNuestro.com"/>
        <Content> 
          <Timer />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;

