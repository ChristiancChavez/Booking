import React from 'react';
import Hotel from '../Hotel/Hotel';
import PropTypes from 'prop-types';

const Hotels = ({ hotels }) => {
    return (
        <section className="section" style={{ marginTop: '3em' }}>
        <div className="container">
            <div className="columns is-multiline">
                { hotels.length === 0 ? 
                    (
                        <article className="message is-warning">
                            <div className="message-body">
                                No hay hoteles que coincidan con tus criterios de busqueda.
                            </div>
                        </article>
                    ) : 
                    (
                        hotels.map((hotel) => {
                            return (
                                <div key={ hotel.slug } className="column is-one-third">
                                    <Hotel hotel={ hotel } />
                                </div>
                            );
                        })
                    )
                }
            </div>
        </div>
    </section>
    )
}

Hotels.propTypes = {
    hotels: PropTypes.array.isRequired
};

export default Hotels;
