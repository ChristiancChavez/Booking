import React from 'react';
import Hotel from '../Hotel/Hotel';

const Hotels = ({ data }) => {
    const hotelsFiltered = data.map( hotel => {
        return <div className="column is-one-third">
                    <Hotel data={ hotel } />
                </div>
    });
    
    return (
        <section className="section" style={ {marginTop: '3em'} }>
        <div className="container">
            <div className="columns is-multiline">
            { hotelsFiltered }
            </div>
        </div>
        {/* <article className="message is-warning">
            <div className="message-body">
                No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
            </div>
        </article> */}
    </section>
    )
    
}

export default Hotels;
