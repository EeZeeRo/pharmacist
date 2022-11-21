import React from 'react';
import {useState} from 'react';
import './Search.css'

import enter from '../assets/img/enter.png';

const Search = () => {
    
    return(
        <div className="search-line">
            <div className="search">
                <input className="search-query" type="text" name="query_product" placeholder="Введите наименование лекарства..." />
                <img src={enter} id="search_enter" />
            </div>
            <div className="city">
                <select name="city_product">
                    <option value="barnaul">Барнаул</option>
                    <option value="novoaltaysk">Новоалтайск</option>
                    <option value="biysk">Бийск</option>
                </select>
            </div>
        </div>
    )
}

export default Search;