import React from 'react';

import './Categories.css';
import CategoryAdding from '../CategoryAdding/CategoryAdding';
import CategoriesTree from '../CategoriesTree/CategoriesTree';

export default class Categories extends React.Component {
    render() {
        return (
            <div className="categories">
                <CategoryAdding />
                <CategoriesTree activeCategoryId={this.props.activeCategoryId} />
            </div>
        );
    }
}
