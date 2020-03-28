import React, { Component } from 'react';
import Hero from './Components/Hero/Hero';
import Filters from './Components/Filters/Filters';
import {today} from './Assets/data.js';
import './App.css';

class App extends Component{
  state =  {
    filters: {
      dateFrom: today,
      dateTo: new Date(today.valueOf() + 86400000),
      country: '',
      price: 0,
      rooms: 0
    }
  }
  
  render(){
    const { filters } = this.state;
    console.log(today);
    return (
      <div className="App">
        <Hero filters={filters} />
        <Filters filters={filters} />
      </div>
    );
  }
}

export default App;
