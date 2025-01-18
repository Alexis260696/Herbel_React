// src/components/Contact/Contact.tsx

import React, { useState } from 'react';
import './Contact.scss';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="wrap-title-section">
                <h2>Contacto</h2>
            </div>
            <div className="wrap-two-column">
                {/* Formulario */}
                <div className="wrap-form card">
                    <h3>Envíanos un Mensaje</h3>
                    {submitted ? (
                        <p className="success-message">¡Gracias por contactarnos! Responderemos pronto.</p>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu correo"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tu mensaje"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button type="submit" className="cta-button">Enviar</button>
                        </form>
                    )}
                </div>
                {/* Mapa */}
                <div className="wrap-map card">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.713080108736!2d-103.43084332394871!3d20.64054868091347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ac15f3a003db%3A0x69764353c3f57960!2sHERBEL%20Renta%20De%20Autos!5e0!3m2!1ses!2smx!4v1733190903524!5m2!1ses!2smx"
                        width="100%"
                        height="100%"
                        style={{ border:0}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
