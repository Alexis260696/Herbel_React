// src/components/Services/Services.tsx

import React, { useEffect, useRef } from 'react';
import './Services.scss';

interface Service {
    title: string;
    description: string;
    icon?: string; // URL del ícono o imagen opcional
}

const services: Service[] = [
    {
        title: 'Renta de Autos',
        description: 'Ofrecemos una amplia gama de autos para renta, desde compactos hasta SUVs, con tarifas competitivas.',
        icon: 'path/to/car-icon.png'
    },
    {
        title: 'Servicio con Chofer',
        description: 'Brindamos servicios con chofer para garantizar que disfrutes del mejor viaje.',
        icon: 'path/to/maintenance-icon.png'
    }
];

const ServicesSection: React.FC = () => {
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

        const elements = sectionRef.current?.querySelectorAll('.service-card');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section services-section" id="services" ref={sectionRef}>
            <div className="wrap-title-section">
                <h2>Nuestros Servicios</h2>
            </div>
            <div className="wrap-services">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        {service.icon && <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />}
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
