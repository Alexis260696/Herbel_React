// src/data/carsData.ts

import fordFiestaImage from "../../public/imagenes/c2/prueba_tarjetas.jpg";
import hondaCivicImage from "../../public/imagenes/c2/prueba_tarjetas.jpg";
import toyotaCorollaImage from "../../public/imagenes/c2/prueba_tarjetas.jpg";
import nissanAltimaImage from "../../public/imagenes/c2/prueba_tarjetas.jpg";
import hyundaiSonataImage from "../../public/imagenes/c2/prueba_tarjetas.jpg";
import kiaOptimaImage from "../../public/imagenes/c2/prueba_tarjetas.jpg";
import fordEscapeImage from "../../public/imagenes/c2/prueba_tarjetas.jpg";
import toyotaRAV4Image from "../../public/imagenes/c2/prueba_tarjetas.jpg";
import nissanRogueImage from "../../public/imagenes/c2/prueba_tarjetas.jpg";
import fordF150Image from "../../public/imagenes/c2/prueba_tarjetas.jpg";
import chevroletSilveradoImage from "../../public/imagenes/c2/prueba_tarjetas.jpg";
import ram1500Image from "../../public/imagenes/c2/prueba_tarjetas.jpg";
import { Car } from '../models/Car';

// Exportar las categorías
export const categories = [
    { id: 1, name: "Compacto" },
    { id: 2, name: "sedan" },
    { id: 3, name: "SUV" },
    { id: 4, name: "Camioneta" },
];

// Exportar los datos de los coches por categoría
export const carData: Record<string, Car[]> = {
    compacto: [
        {
            id: 1,
            name: "Ford Fiesta",
            price: "$30/día",
            description: "Un auto compacto ideal para la ciudad.",
            image: fordFiestaImage,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 1,
            smallLuggage: 2,
            categoria: "Compacto",
        },
        {
            id: 2,
            name: "Honda Civic",
            price: "$32/día",
            description: "Un clásico con estilo y rendimiento.",
            image: hondaCivicImage,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 2,
            smallLuggage: 2,
            categoria: "Compacto",
        },
        {
            id: 3,
            name: "Toyota Corolla",
            price: "$31/día",
            description: "Eficiencia y comodidad en un solo paquete.",
            image: toyotaCorollaImage,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 2,
            smallLuggage: 3,
            categoria: "Compacto",
        },
    ],
    sedan: [
        {
            id: 4,
            name: "Nissan Altima",
            price: "$34/día",
            description: "Estilo y eficiencia para tus viajes.",
            image: nissanAltimaImage,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 2,
            smallLuggage: 3,
            categoria: "Sedán",
        },
        {
            id: 5,
            name: "Hyundai Sonata",
            price: "$35/día",
            description: "Diseño elegante y tecnología avanzada.",
            image: hyundaiSonataImage,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 2,
            categoria: "Sedán",
        },
        {
            id: 6,
            name: "Kia Optima",
            price: "$33/día",
            description: "Comodidad y rendimiento en cada viaje.",
            image: kiaOptimaImage,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 2,
            smallLuggage: 2,
            categoria: "Sedán",
        },
    ],
    suv: [
        {
            id: 7,
            name: "Ford Escape",
            price: "$40/día",
            description: "Un SUV versátil para aventuras familiares.",
            image: fordEscapeImage,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 2,
            categoria: "SUV",
        },
        {
            id: 8,
            name: "Toyota RAV4",
            price: "$42/día",
            description: "Un SUV espacioso y confiable.",
            image: toyotaRAV4Image,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 3,
            categoria: "SUV",
        },
        {
            id: 9,
            name: "Nissan Rogue",
            price: "$41/día",
            description: "Un SUV práctico y cómodo para viajes.",
            image: nissanRogueImage,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 3,
            smallLuggage: 3,
            categoria: "SUV",
        },
    ],
    camioneta: [
        {
            id: 10,
            name: "Ford F-150",
            price: "$50/día",
            description: "La camioneta más vendida de América.",
            image: fordF150Image,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 4,
            smallLuggage: 2,
            categoria: "Camioneta",
        },
        {
            id: 11,
            name: "Chevrolet Silverado",
            price: "$52/día",
            description: "Rendimiento y durabilidad para cualquier trabajo.",
            image: chevroletSilveradoImage,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 4,
            smallLuggage: 3,
            categoria: "Camioneta",
        },
        {
            id: 12,
            name: "Ram 1500",
            price: "$54/día",
            description: "Una camioneta con estilo y potencia.",
            image: ram1500Image,
            capacity: 5,
            airConditioning: true,
            largeLuggage: 4,
            smallLuggage: 3,
            categoria: "Camioneta",
        },
    ],
};
