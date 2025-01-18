// src/components/AboutUs/AboutUs.tsx

import React, { useEffect, useRef } from 'react';
import './AboutUs.scss';

interface AboutSection {
    title: string;
    description: string;
    icon?: string; // URL del ícono o imagen opcional
}

const aboutContent: AboutSection[] = [
    {
        title: 'Nuestra Misión',
        description: 'Para nosotros es muy importante ofrecer servicios en renta de autos confiables, seguros y accesibles, para satisfacer las necesidades de cada cliente.',
    },
    {
        title: 'Nuestra Visión',
        description: 'Permanecer como una empresa líder en renta de autos, reconocida por nuestra calidad de servicio, innovación y compromiso con el cliente.',
    },
    {
        title: 'Nuestros Valores',
        description: 'Puntualidad, integridad, excelencia y dedicación son los pilares que guían todo lo que hacemos en HERBEL.',
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
                <h2>Sobre Nosotros</h2>
            </div>
            <div className="wrap-about">
                {/* Cuadro de la imagen */}
                <div className="about-card about-image-card">
                    <img
                        src="../../../public/imagenes/conocenos.jpg" // Ruta de la imagen destacada
                        alt="HERBEL"
                        className="about-featured-image"
                    />
                </div>
                {/* Resto de los cuadros */}
                {aboutContent.map((content, index) => (
                    <div className="about-card" key={index}>
                        {content.icon && <img src={content.icon} alt={`${content.title} icon`} className="about-icon" />}
                        <h3>{content.title}</h3>
                        <p>{content.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
