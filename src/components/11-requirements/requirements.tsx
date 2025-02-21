// src/components/Requirements/Requirements.tsx

import React, { useEffect, useRef } from 'react';
import './requirements.scss';

interface Requirements {
    title: string;
    description: string;
}

const RequirementsContent: Requirements[] = [
    {
        title: 'Tarjeta de Crédito',
        description: 'Presentar tarjeta de crédito física (Visa o Mastercard) para depósito en garantía (el monto dependerá del vehículo de su preferencia). *No aceptamos American Express.',
    },
    {
        title: 'Licencia de Conducir',
        description: 'Es necesario presentar licencia de conducir vigente.',
    },
    {
        title: 'Identificación Oficial',
        description: 'INE o Pasaporte vigente.',
    }
];

const Requirements: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.requirement-card, .requirement-image-card');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section requirements-section" id="requirements" ref={sectionRef}>
            <div className="wrap-title-section">
                <h2>Requisitos</h2>
            </div>
            <div className="wrap-requirements">
                {/* Cuadro de la imagen */}
                <div className="requirement-card requirement-image-card">
                    <img
                        src="imagenes/volvo.jpg" // Ruta de la imagen destacada
                        alt="HERBEL"
                        className="requirement-featured-image"
                    />
                </div>
                {/* Resto de los cuadros */}
                {RequirementsContent.map((content, index) => (
                    <div className="requirement-card" key={index}>
                        <h3>{content.title}</h3>
                        <p>{content.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Requirements;
