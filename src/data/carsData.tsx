// src/data/carsData.ts

import { Car } from '../models/Car';

// Exportar las categorías
export const categories = [
    { id: 1, name: "Chico" },
    { id: 2, name: "Mediano" },
    { id: 3, name: "Grande" },
    { id: 4, name: "SUV" },
    { id: 5, name: "MiniVan" },
    { id: 6, name: "Van" },
];

// Exportar los datos de los coches por categoría
export const carData: Record<string, Car[]> = {
    chico: [
        {
            id: 1,
            name: "Aveo",
            price: "$850/día",
            description: "Un auto compacto ideal para la ciudad.",
            image: "imagenes/autos/png/aveo-S.png" ,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 1,
            smallLuggage: 2,
            categoria: "Compacto",
        },
    ],
    mediano: [
        {
            id: 2,
            name: "Versa",
            price: "$950/día",
            description: "Diseño elegante y tecnología avanzada.",
            image: "imagenes/autos/png/versa.png" ,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 2,
            categoria: "SubCompacto",
        },
        {
            id: 3,
            name: "Rio",
            price: "$1100/día",
            description: "Estilo y eficiencia para tus viajes.",
            image: "imagenes/autos/png/rio.png" ,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 2,
            smallLuggage: 3,
            categoria: "SubCompacto",
        },
        {
            id: 4,
            name: "Elantra",
            price: "$1100/día",
            description: "Diseño elegante y tecnología avanzada.",
            image: "imagenes/autos/png/elentra.png" ,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 2,
            categoria: "SubCompacto",
        },
        
    ],
    grande: [
        {
            id: 5,
            name: "MG5",
            price: "$1350/día",
            description: "Diseño elegante y tecnología avanzada.",
            image: "imagenes/autos/png/MG5.png" ,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 2,
            categoria: "SubCompacto",
        },
        {
            id: 6,
            name: "Forte",
            price: "$1350/día",
            description: "Diseño elegante y tecnología avanzada.",
            image: "imagenes/autos/png/forte.png" ,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 2,
            categoria: "SubCompacto",
        },
    ],
    suv: [
        {
            id: 7,
            name: "Creta",
            price: "$1950/día",
            description: "Un SUV versátil para aventuras familiares.",
            image: "imagenes/autos/png/creta.png" ,
            capacity: 8,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 2,
            categoria: "SUV",
        },
        {
            id: 8,
            name: "Sorento",
            price: "$2500/día",
            description: "Un SUV práctico y cómodo para viajes.",
            image: "imagenes/autos/png/sorento.png" ,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 3,
            categoria: "SUV",
        },
        
    ],
    minivan: [
        {
            id: 9,
            name: "Avanza",
            price: "$1700/día",
            description: "Un SUV espacioso y confiable.",
            image: "imagenes/autos/png/avanza.png" ,
            capacity: 7,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 3,
            categoria: "Van",
        },
        {
            id: 10,
            name: "Sienna",
            price: "$2150/día",
            description: "Un SUV versátil para aventuras familiares.",
            image: "imagenes/autos/png/sienna16.png" ,
            capacity: 8,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 2,
            categoria: "SUV",
        },
        {
            id: 11,
            name: "Sienna Hibrida",
            price: "$2900/día",
            description: "Un SUV versátil para aventuras familiares.",
            image: "imagenes/autos/png/sienna.png" ,
            capacity: 8,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 2,
            categoria: "SUV",
        },
    ],
    van: [   
        {
            id: 12,
            name: "Express Van",
            price: "$2250/día",
            description: "Rendimiento y durabilidad para cualquier trabajo.",
            image: "imagenes/autos/png/express.png" ,
            capacity: 11,
            airConditioning: true,
            largeLuggage: 4,
            smallLuggage: 3,
            categoria: "Van",
        }, 
        {
            id: 13,
            name: "Hiace",
            price: "$2900/día",
            description: "La camioneta más vendida de América.",
            image: "imagenes/autos/png/hiace-S.png" ,
            capacity: 15,
            airConditioning: true,
            largeLuggage: 4,
            smallLuggage: 2,
            categoria: "Van",
        },
    ],
};
