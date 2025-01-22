// src/components/FreeServices/FreeServices.tsx

import React, { useEffect, useRef } from 'react';
import './FreeServices.scss';

interface Service {
    title: string;
    description: string;
    icon?: string; // URL del ícono o imagen opcional
}

const freeServicesContent: Service[] = [
    {
        title: 'Seguro ',
        description: 'Todos nuestros autos incluyen seguro básico para garantizar tu tranquilidad durante el viaje.',
        icon: '../../../public/icons/insurance.png',
    },
    {
        title: 'Asistencia 24/7',
        description: 'Contamos con asistencia telefonica disponible las 24 horas, los 7 días de la semana.',
        icon: '../../../public/icons/assistance.png',
    },
    {
        title: 'Kilometraje ilimitado',
        description: 'Viaja sin preocupaciones, ya que no hay límite en el número de kilómetros recorridos.',
        icon: '../../../public/icons/unlimited.png',
    },
    {
        title: 'GPS ',
        description: 'Navega con facilidad gracias a nuestro GPS. (sujeto a disponibilidad)',
        icon: '../../../public/icons/gps.png',
    },
    {
        title: 'Silla de bebé',
        description: 'silla de bebe ergonomica para que los mas pequeños tambien disfruten del viaje. (sujeto a disponibilidad)',
        icon: '../../../public/icons/gps.png',
    }
];

const FreeServices: React.FC = () => {
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
        <section className="section free-services-section" id="free-services" ref={sectionRef}>
            <div className="wrap-title-section">
                <h2>Servicios Incluidos</h2>
            </div>
            <div className="wrap-services">
                {freeServicesContent.map((service, index) => (
                    <div className="service-card" key={index}>
                        {/* {service.icon && <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />} */}
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FreeServices;
