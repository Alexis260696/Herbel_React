import React from 'react';
import './CarFilter.scss';

interface Category {
    id: number;
    name: string;
}

interface CarFilterProps {
    categories: Category[];
    selectedCategory: number | null;
    onSelectCategory: (categoryId: number | null) => void;
}

const CarFilter: React.FC<CarFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="category-filters" id='vehicles'>
            {/* El título se mantiene arriba */}
            <div className="wrap-title-section">
                <h2>Vehículos</h2>
            </div>
            
            {/* Botones de filtro */}
            <div className="filter-buttons">
                <button
                    className={`filter-button ${selectedCategory === null ? 'active' : ''}`}
                    onClick={() => onSelectCategory(null)}
                >
                    Todos
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => onSelectCategory(category.id)}
                    >
                        {category.name}
                        
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CarFilter;
