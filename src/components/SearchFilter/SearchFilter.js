import React from 'react';
import './SearchFilter.css';


export default class SearchFilter extends React.Component {
    render() {
        return (
            <div className="search-filter">
                <input className="search-input" placeholder="Search"/>
                <button className="search-btn">
                    <i className="fa fa-close"></i>
                </button>
            </div>
        );
    }
}