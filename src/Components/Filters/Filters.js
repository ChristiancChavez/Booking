import React, { Component }  from 'react';
import OptionsFilter from '../OptionsFilter/OptionsFilter';
import DateFilter from '../DateFilter/DateFilter';

class Filters extends Component {

    handleOptionChange = (event) => {
        let payload = this.props.filters
        payload[event.target.name] = event.target.value
      
        this.props.onFilterChange(payload)
    }

    render() {
        const { filters, name } = this.props;
        return (
            <div className="field">
                <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
                    <div className="navbar-item">
                        <DateFilter
                            date={ filters.dateFrom }
                            icon="sign-in-alt" 
                            name={ name }
                            onDateChange={ this.handleOptionChange }
                        />
                        
                    </div>
                    <div className="navbar-item">
                        <DateFilter
                            date={ filters.dateTo }
                            icon="sign-out-alt" 
                            name={ name }
                            onDateChange={ this.handleOptionChange }
                        />
                    </div>
                    <div className="navbar-item">
                        <OptionsFilter
                            options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
                            selected={ filters.country }
                            icon="globe" 
                            onOptionchange={ this.handleOptionChange } 
                        />
                    </div>
                    <div className="navbar-item">
                        <OptionsFilter
                            options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                            selected={ filters.price }
                            icon="dollar-sign"
                            onOptionchange={ this.handleOptionChange } 
                        />
                    </div>
                    <div className="navbar-item">
                        <OptionsFilter
                            options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                            selected={ filters.rooms }
                            icon="bed"
                            onOptionchange={ this.handleOptionChange } 
                        />
                    </div>
                </nav>
            </div>
        )
    }   
}

export default Filters;

