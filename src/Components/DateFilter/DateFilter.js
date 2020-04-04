import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import PropTypes from 'prop-types';

class DateFilter extends Component {

  dateCheck = (date) => {
    if (moment(date).isValid()) {
      return moment(date).format('YYYY-MM-DD');
    }
    return '';
  }

  render(){
    const { date, icon, name, onDateChange, dateMin, dateMax } = this.props;
    return (
      <div className="field">
      <div className="control has-icons-left">
        <input
          className="input"
          type="date"
          onChange={ (newDate) => onDateChange(newDate) }
          value={ this.dateCheck(date) }
          name={ name }
          min={ this.dateCheck(dateMin) }
          max={ this.dateCheck(dateMax) }
        />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={ icon } />
        </span>
      </div>
    </div>
    )
  }
}

DateFilter.propTypes = {
  dateMax: PropTypes.object.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  
  dateMin: PropTypes.object.isRequired,
};

export default DateFilter;
