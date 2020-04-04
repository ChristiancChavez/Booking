import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class OptionsFilter extends Component {

    handleOptionChange = (option) => {
        this.props.onOptionChange(option);
    }
    render(){
        const { options, icon, name, selected } = this.props;
        const showOptions = options.map(option => {
            return (
                <option key={option.name} value={option.value === undefined ? '' : option.value}>
                    {option.name}
                </option>
            );
        })
    
        return (
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                        <select value={ selected } onChange={ this.handleOptionChange } name={ name }>
                            { showOptions }
                        </select>
                    </div>
                    <div className="icon is-small is-left">
                        <FontAwesomeIcon icon={ icon } />
                    </div>
                </div>
            </div>
        )
    }
    
}

OptionsFilter.propTypes = {
    options: PropTypes.array.isRequired,
    icon: PropTypes.object.isRequired,
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onOptionChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

export default OptionsFilter;
