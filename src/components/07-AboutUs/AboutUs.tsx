// src/components/AboutUs/AboutUs.tsx

import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.scss';

const AboutSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [buttonText, setButtonText] = useState('Contact Us');

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

        const elements = sectionRef.current?.querySelectorAll('.fade-in');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleMouseEnter = () => setButtonText('Reach Out');
    const handleMouseLeave = () => setButtonText('Contact Us');

    return (
        <section className="about-section" id="about-us" ref={sectionRef}>
            <div className="content-container">
                <div className="image-column fade-in"></div>
                <div className="text-column fade-in">
                    <h2>About Us</h2>
                    <p>
                        We are a team of dedicated professionals committed to delivering top-notch services that make a difference.
                        Our mission is to provide innovative solutions tailored to your needs, ensuring quality, transparency, and trust.
                    </p>
                    <p>
                        Our team combines years of experience with cutting-edge technology to help businesses grow and thrive.
                        We believe in a personalized approach that ensures each client receives the attention they deserve.
                    </p>
                    <div className="cta-wrapper">
                        <a
                            href="https://example.com/contact"
                            className="cta-button"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {buttonText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
