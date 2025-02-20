// src/components/AboutUs/AboutUs.tsx

import React, { useEffect, useRef } from 'react';
import './requirements.scss';

interface Requirements {
    title: string;
    description: string;
}

const RequirementsContent: Requirements[] = [
    {
        title: 'Tarjeta de Crédito',
        description: 'Se requiere una tarjeta de crédito válida para asegurar la renta y cubrir cualquier cargo adicional o depósito.',
    },
    {
        title: 'Licencia de Conducir',
        description: 'Es necesario presentar una licencia de conducir vigente para confirmar la autorización para operar el vehículo.',
    },
    {
        title: 'Identificación Oficial',
        description: 'Se solicita una identificación oficial para la verificación de identidad. Los residentes mexicanos deben presentar su INE (Instituto Nacional Electoral).',
    }
];

const AboutUs: React.FC = () => {
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

        const elements = sectionRef.current?.querySelectorAll('.about-card, .about-image-card');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section about-us-section" id="about-us" ref={sectionRef}>
            <div className="wrap-title-section">
                <h2>Requisitos</h2>
            </div>
            <div className="wrap-about">
                {/* Cuadro de la imagen */}
                <div className="about-card about-image-card">
                    <img
                        src="imagenes/volvo.jpg" // Ruta de la imagen destacada
                        alt="HERBEL"
                        className="about-featured-image"
                    />
                </div>
                {/* Resto de los cuadros */}
                {RequirementsContent.map((content, index) => (
                    <div className="about-card" key={index}>
                        <h3>{content.title}</h3>
                        <p>{content.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
