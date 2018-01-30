import React from 'react';
import './Popup.css';

export default class Popup extends React.Component {
    render() {
        return (
            <div className="popup">
                <div className="category-adding">
                    <input ref={(input) => { this.categoryTitle = input; }}
                           className="input-category-name"
                           placeholder="Enter category title"
                    />
                    <button onClick={this.onAddButtonClick} className="add-btn">Add</button>
                </div>
            </div>

        );
    }
}