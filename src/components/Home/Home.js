import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Carlos'
    };
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        name: 'Cristina '
      })
    }, 1000)
  }

  render() {
    console.log('Name: ', this.state.name)
    return (
      <div className="Home">
        <h1 className="App-title"> ¯\_( ͡° ͜ʖ ͡°)_/¯</h1>
        <p>Santa {this.state.name}, madre dios ruega señora por nosotros los pecadores, ahora y en la hora de nuestra muerte amen.</p>
        <a href="https://www.ammespanol.org/Oraciones%20catolicas%20basicas.aspx">Mas aqui ༼ つ ◕-◕ ༽つ</a>
        <p>
          <button 
            style={{
              backgroundColor: 'gray',
              border: '1px solid black'
            }}>
              Don't click me!
          </button>
        </p>
      </div>
    )
  }
}