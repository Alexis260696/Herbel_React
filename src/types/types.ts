// src/types/types.ts

export interface Car {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
    capacity: number;
    airConditioning: boolean;
    largeLuggage: number;
    smallLuggage: number;
    categoria: string;
}

export interface CarFilterProps {
    categories: { id: number; name: string }[];
    selectedCategory: number | null;
    onSelectCategory: (categoryId: number | null) => void;
}
