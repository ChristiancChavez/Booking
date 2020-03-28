import React from 'react';

const OptionsFilter = ({ options, selected, icon }) => {
    const showOptions = options.map(option => {
        return <option value={option.value} key={option.name}>{option.name}</option>
    })

    return (
        <div className="field">
            <div className="control has-icons-left">
                <div className="select" style={ {width: '100%'} }>
                    <select style={ {width: '100%'} } value={selected}>
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

export default OptionsFilter;
