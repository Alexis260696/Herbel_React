import { useState, useEffect } from 'react';
import './Hero.scss';

const Hero = () => {
    const [showCard, setShowCard] = useState(false);
    const [currentMessage, setCurrentMessage] = useState(0);
    const [fade, setFade] = useState(true);

    const messages = [
        "Disfruta de la mejor experiencia en alquiler de autos.",
        "Con el placer de servirle.",
        "Somos personas atendiendo personas."
    ];

    useEffect(() => {
        // Mostrar la tarjeta después de un breve retraso
        setTimeout(() => setShowCard(true), 500);

        // Alternar mensajes cada 3 segundos con animación
        const interval = setInterval(() => {
            setFade(false); // Inicia la animación de salida
            setTimeout(() => {
                setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
                setFade(true); // Inicia la animación de entrada
            }, 500); // Tiempo sincronizado con la duración de la animación CSS
        }, 5000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []);

    const scrollToVehicles = () => {
        document.getElementById('vehicles')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`hero-container ${showCard ? 'show' : ''}`} id="home">
            <div className="hero-content">
                <div className="card">
                    <h1 className="work-sans-bold">Bienvenido a Herbel</h1>
                    {/* Mensaje dinámico con animación */}
                    <p className={`work-sans-normal ${fade ? 'fade-in' : 'fade-out'}`}>
                        {messages[currentMessage]}
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
