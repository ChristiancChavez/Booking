import React, { Component }  from 'react';

class OptionsFilter extends Component {

    handleOptionchange = (event) => {
        let payload = this.props.filters
        payload[event.target.name] = event.target.value
      
        this.props.onOptionChange(payload)
    }
    render(){
        const { options, selected, icon } = this.props;
        const showOptions = options.map(option => {
            return <option value={option.value} key={option.name}>{option.name}</option>
        })
    
        return (
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                        <select style={ {width: '100%'} } value={selected} onchange={this.handleOptionchange}>
                            {showOptions}
                        </select>
                    </div>
                    <div className="icon is-small is-left">
                        <i className={`fas ${icon}`}></i>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default OptionsFilter;
