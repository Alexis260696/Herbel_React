import React, { useState } from 'react';
import './Footer.scss';
import ModalLegal from '../12-modalLegal/ModalLegal';
import { terminosycondiciones, avisodeprivacidad } from '../12-modalLegal/legal/legal'; // ✅ Importa los textos

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const handleOpenModal = (type: 'privacy' | 'terms') => {
    if (type === 'privacy') {
      setModalContent({
        title: 'Política de Privacidad',
        content: avisodeprivacidad,
      });
    } else {
      setModalContent({
        title: 'Términos y Condiciones',
        content: terminosycondiciones,
      });
    }
    setShowModal(true);
  };

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
          <button onClick={() => handleOpenModal('privacy')} aria-label="Política de privacidad" className="footer-button">
            Política de Privacidad
          </button>
          <button onClick={() => handleOpenModal('terms')} aria-label="Términos y condiciones" className="footer-button">
            Términos y Condiciones
          </button>
        </div>
      </div>

      <ModalLegal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </footer>
  );
};

export default Footer;
