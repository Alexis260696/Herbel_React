// src/models/Car.ts

export interface Car {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string; // Debe ser de tipo string para las rutas de imagen
    capacity: number;
    airConditioning: boolean;
    largeLuggage: number;
    smallLuggage: number;
    categoria: string;
}
