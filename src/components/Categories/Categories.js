import React from 'react';

import './Categories.css';
import CategoryAdding from '../CategoryAdding/CategoryAdding';
import CategoriesTree from '../CategoriesTree/CategoriesTree';

const Categories = ({ activeCategoryId }) => (
    <div className="categories">
        <CategoryAdding />
        <CategoriesTree activeCategoryId={activeCategoryId} />
    </div>
);

export default Categories;