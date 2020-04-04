import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
const Hero = ({ filters }) => {

    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                <h1 className="title">Boo-king</h1>
                <h2 className="subtitle">
                    <strong>Hoteles</strong>{' '}
                    {moment(filters.dateFrom).isValid()
                    ? `desde el ${moment(filters.dateFrom).format('LL')}`
                    : ''}
                    {moment(filters.dateTo).isValid()
                    ? `, hasta el ${moment(filters.dateTo).format('LL')}`
                    : ''}
                    {filters.country !== undefined &&
                    ` en ${filters.country}`}
                    {filters.price !== undefined &&
                    ` por $${filters.price} la noche`}
                    {filters.rooms !== undefined &&
                    ` de hasta ${filters.rooms} habitaciones.`}
                </h2>
                </div>
            </div>
        </section>
    )
}

Hero.propTypes = {
    filters: PropTypes.object.isRequired
};

export default Hero;
