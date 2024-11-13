// src/components/Contact/Contact.tsx

import React from 'react';
import './Contact.scss';

const ContactSection: React.FC = () => {
    return (
        <section className="section two-column-section" id="contact">
            <div className="wrap-title-section">
                <h2>Contacto</h2>
            </div>
            <div className="wrap-two-column">
                <div className="wrap-form">
                    <h3>Envíanos un Mensaje</h3>
                    <form 
                        action="https://formsubmit.co/youremail@example.com" 
                        method="POST" 
                        className="contact-form"
                    >
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="phone">Teléfono:</label>
                        <input type="tel" id="phone" name="phone" />

                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" rows={5} required></textarea>

                        <button type="submit" className="cta-button">Enviar</button>
                    </form>
                </div>
                <div className="wrap-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18..."
                        style={{ border: 0, width: '100%', height: '300px' }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
