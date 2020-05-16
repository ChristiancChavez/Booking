import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Price from '../Price/Price';

const Hotel = ({ hotel }) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={hotel.photo} alt={hotel.slug} />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{ hotel.name }</p>
                <p>{ hotel.description }</p>
                <div className="field is-grouped is-grouped-multiline" style={{ marginTop: '1em' }}>
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-info">
                                <FontAwesomeIcon icon={fas.faMapMarker} />
                            </span>
                            <span className="tag is-medium">{ `${ hotel.city }, ${ hotel.country }` }</span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-info">
                                <FontAwesomeIcon icon={fas.faBed} /> 
                            </span>
                            <span className="tag is-medium">{ hotel.rooms }Habitaciones</span>
                        </div>
                    </div>
                    <Price stars={hotel.price} />
                </div>
            </div>
            <div className="card-footer">
                <a href="#" onClick={(e) => {
                        e.preventDefault();
                        alert('Lo siento, aún no implementamos esto :C');
                    }} className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
                    Reservar
                </a>
            </div>
        </div>
    )
}

Hotel.propTypes = {
    hotel: PropTypes.object.isRequired
};

export default Hotel;
