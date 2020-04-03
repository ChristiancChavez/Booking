import React, { Component } from 'react';
import Hero from './Components/Hero/Hero';
import Filters from './Components/Filters/Filters';
import Hotels from './Components/Hotels/Hotels';
import { today } from './Assets/data.js';
import { hotelsData } from './Assets/data.js';
import 'bulma/css/bulma.css'
import './App.css';

class App extends Component{
  state =  {
    filters: {
      dateFrom: today,
      dateTo: new Date(today.valueOf() + 86400000),
      country: '',
      price: 0,
      rooms: 0
    },
    hotels: hotelsData,
  }

  handleFilterChange = (payload) => {
    this.setState({
      filters: payload
    })
  }
  
  render(){
    const { filters, hotels } = this.state;
    return (
      <div className="App">
        <Hero filters={ filters } />
        <Filters filters={ filters } onFilterChange={ this.handleFilterChange } />
        <Hotels  data={ hotels }/>
      </div>
    );
  }
}

export default App;
