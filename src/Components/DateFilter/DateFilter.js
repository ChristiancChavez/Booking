import React, { Component }  from 'react';

class DateFilter extends Component {

  handleDateChange = (event) => {
    this.props.onDateChange(event)
  }
  render(){
    const { date, icon, name } = this.props;
    return (
      <div className="field">
        <div className="control has-icons-left">
          <input onChange={ this.handleDateChange } value={ 'date' } name={ name } />
          <span className="icon is-small is-left">
            <i className={`fas ${icon}`}>{'date'}</i>
          </span>
        </div>
      </div>
    )
  }
}

export default DateFilter;
