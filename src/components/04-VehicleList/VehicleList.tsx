// src/components/VehicleList/VehicleList.tsx
import React from 'react';
import VehicleCard from '../05-VehicleCard/VehicleCard';
import './VehicleList.scss';
import { Car } from '../../models/Car';

interface VehicleListProps {
  vehicles: Car[];
}

const VehicleList: React.FC<VehicleListProps> = ({ vehicles }) => {
  return (
    <div className="vehicle-list" >
      <div className="card-container">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} car={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
