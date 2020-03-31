import React from 'react';
const Hero = ({ filters }) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                <h1 className="title">Hoteles</h1>
                <h2 className="subtitle">
                    desde el <strong>, {filters.dateFrom.toLocaleDateString(undefined, options)}</strong> hasta el <strong>, {filters.dateTo.toLocaleDateString(undefined, options)}</strong> 
                    {
                        !filters.rooms &&  !filters.price && !filters.country ? 
                        null : 
                        <span>
                            en <strong>{filters.country ? filters.country : null}</strong> por <strong>{filters.price? filters.price : null}</strong> de hasta <strong>{filters.rooms ? filters.rooms : null}</strong>
                        </span>
                    }
                </h2>
                </div>
            </div>
        </section>
    )
    
}

export default Hero;
