import React from 'react';
import { connect } from 'react-redux';

import './CategoriesTree.css';
import CategoryItem from '../CategoryItem/CategoryItem';

const CategoriesTree = ({ activeCategoryId, categories }) => (
    <div className="categories-tree">
        {
            categories.map(categoryItem => (
                <CategoryItem
                    categoryItem={categoryItem}
                    key={categoryItem.id}
                    active={activeCategoryId === categoryItem.id}
                />
            ))
        }
    </div>
);

const mapStateToProps = ({ categories }) => ({
    categories: categories.categoryList,
});

export default connect(mapStateToProps)(CategoriesTree)
