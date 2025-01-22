// src/App.tsx

import React, { useState } from 'react';
import Header from './components/01-Header/Header';
import Hero from './components/02-Hero/Hero';
import CarFilter from './components/03-CarFilter/CarFilter';
import VehicleList from './components/04-VehicleList/VehicleList'; 
import { categories, carData } from './data/carsData';
import { Car } from './models/Car';
import ServicesSection from './components/06-Services/Services';
import AboutSection from './components/07-AboutUs/AboutUs';
import ContactSection from './components/08-Contact/Contact';
import Footer from './components/09-Footer/Footer';
import FreeServices from './components/10-freeServices/freeServices';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // Función para manejar la selección de categoría
  const handleSelectCategory = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
  };

  // Filtrar los autos según la categoría seleccionada
  const getCarsByCategory = (): Car[] => {
    if (selectedCategory === null) {
      return Object.values(carData).flat(); // Obtener todos los autos
    }

    const categoryKey = categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase();
    return categoryKey ? carData[categoryKey] || [] : [];
  };

  // Autos filtrados para mostrar
  const carsToDisplay = getCarsByCategory();

  return (
    <div>
      <Header />
      <Hero />
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
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
