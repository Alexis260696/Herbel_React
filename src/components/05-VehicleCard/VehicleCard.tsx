import React from 'react';
import { Car } from '../../models/Car';
import './VehicleCard.scss';

interface VehicleCardProps {
    car: Car;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ car }) => {
    const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        console.log("Botón de WhatsApp clicado"); // Verificación
        const phoneNumber = '523330601213';
        const message = `Hola, estoy interesado en rentar el auto ${car.name}. ¿Podrías darme más información?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank"); // Abre WhatsApp en una nueva pestaña
    };

    return (
        <div className="car-card" style={{ backgroundImage: `url(${car.image})` }}>
            <h3 className="car-title">{car.name}</h3>
            <p className="car-price">{car.price}</p>
            <div className="car-details">
                <span className="detail-item button-hide">
                    <a onClick={handleWhatsAppClick} className="rent-button">
                        Rentar Ahora
                    </a>
                </span>
                <span className="detail-item">
                    <i className="fas fa-users"></i>
                    <span className="detail-value">{car.capacity}</span>
                </span>
                <span className="detail-item">
                    <i className={`fas ${car.airConditioning ? 'fa-snowflake' : 'fa-times'}`}></i>
                    <span className="detail-value">{car.airConditioning ? 'Sí' : 'No'}</span>
                </span>
                <span className="detail-item">
                    <i className="fas fa-suitcase"></i>
                    <span className="detail-value">{car.largeLuggage}</span>
                </span>
                <span className="detail-item">
                    <i className="fas fa-suitcase-rolling"></i>
                    <span className="detail-value">{car.smallLuggage}</span>
                </span>
            </div>
        </div>
    );
};

export default VehicleCard;
