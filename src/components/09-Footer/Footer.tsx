// src/components/09-Footer/Footer.tsx

import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section company-info">
                    <p>&copy; {new Date().getFullYear()} HERBEL. Todos los derechos reservados.</p>
                </div>
                <div className="footer-section social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="footer-section footer-links">
                    <a href="/privacy-policy" aria-label="Política de privacidad">Política de Privacidad</a>
                    <a href="/terms" aria-label="Términos y condiciones">Términos y Condiciones</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
