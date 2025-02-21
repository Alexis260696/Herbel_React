// src/App.tsx

import React, { useState } from 'react';
import Header from './components/01-Header/Header';
import Hero from './components/02-Hero/Hero';
import CarFilter from './components/04-CarFilter/CarFilter';
import VehicleList from './components/04-VehicleList/VehicleList'; 
import { categories, carData } from './data/carsData';
import { Car } from './models/Car';
import ServicesSection from './components/06-Services/Services';
import AboutSection from './components/03-AboutUs/AboutUs';
import ContactSection from './components/08-Contact/Contact';
import Footer from './components/09-Footer/Footer';
import FreeServices from './components/10-freeServices/freeServices';
import RequirementsSection from './components/11-requirements/requirements';
import './App.css'

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleSelectCategory = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
  };

  const getCarsByCategory = (): Car[] => {
    if (selectedCategory === null) {
      return Object.values(carData).flat();
    }

    const categoryKey = categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase();
    return categoryKey ? carData[categoryKey] || [] : [];
  };

  const carsToDisplay = getCarsByCategory();

  return (
    <>
      <Header />
      <Hero />
      {/* <Whatsapp_button/> */}
      <AboutSection />
      <CarFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelectCategory={handleSelectCategory} 
      />
        {carsToDisplay.length > 0 ? (
          <VehicleList vehicles={carsToDisplay} /> // Usa VehicleList aquí
        ) : (
          <p>No hay autos disponibles para la categoría seleccionada.</p>
        )}

      <ServicesSection />
      <FreeServices />
      <RequirementsSection/>
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
