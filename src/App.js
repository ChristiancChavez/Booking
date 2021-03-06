import React, { Component } from 'react';
import Hero from './Components/Hero/Hero';
import Filters from './Components/Filters/Filters';
import Hotels from './Components/Hotels/Hotels';
import 'bulma/css/bulma.css';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es'); 


class App extends Component{
  state =  {
    filters: {
      dateFrom: '',
      dateTo: '',
      country: undefined,
      price: undefined,
      rooms: undefined
    },
    hotels: [],
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.timeoutId = setTimeout(() => {
      const data = require('./Assets/data.js');
      this.setState({
        hotels: data.hotelsData,
      });
    }, 1500);
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  handleFilterChange = (newFilters) => {
    const data = require('./Assets/data.js');
    this.setState({
      filters: newFilters,
      hotels: data.hotelsData.filter((hotel) => {
        return (
          ((newFilters.dateFrom === '' && newFilters.dateTo === '') ||
            (moment(newFilters.dateFrom) >= moment(hotel.availabilityFrom) &&
              moment(newFilters.dateTo) <= moment(hotel.availabilityTo))
          ) &&
          (newFilters.country === undefined
            ? true
            : hotel.country === newFilters.country
          ) &&
          (newFilters.price === undefined
            ? true
            // eslint-disable-next-line eqeqeq
            : hotel.price == newFilters.price
          ) &&
          (newFilters.rooms === undefined
            ? true
            : hotel.rooms <= newFilters.rooms + 5 &&
              hotel.rooms > newFilters.rooms - 10
          )
        );
      }),
    });
  }
  
  render(){
    const { filters, hotels } = this.state;
    return (
      <div className="App">
        <Hero filters={ filters } />
        <Filters filters={ filters } onFilterChange={ this.handleFilterChange } />
        <Hotels  hotels={ hotels }/>
      </div>
    );
  }
}

export default App;
