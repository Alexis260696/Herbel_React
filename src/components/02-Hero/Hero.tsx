import React, { useState, useEffect } from 'react';
import './Hero.scss';

const Hero = () => {
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        // Mostrar la tarjeta después de un breve retraso
        setTimeout(() => setShowCard(true), 500);
    }, []);

    const scrollToVehicles = () => {
        document.getElementById('vehicles')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`hero-container ${showCard ? 'show' : ''}`} id="home">
            <div className="hero-content">
                <div className="card">
                    <h1 className="work-sans-bold">Bienvenido a Herbel</h1>
                    <p className="work-sans-normal">
                        Disfruta de la mejor experiencia en alquiler de autos.
                    </p>
                    <button className="hero-button work-sans-normal" onClick={scrollToVehicles}>
                        Explorar Autos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
