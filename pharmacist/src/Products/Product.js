import React from "react";
import PropTypes from 'prop-types';
import './Product.css';
import drugs from '../assets/img/drugs.png';
import pillsbottle from '../assets/img/pillsbottle.png';

import citramonp from '../assets/img/products/citramonp.jpg';
import lizobact from '../assets/img/products/lizobact.jpg';

function Product({ product, index }){
    let prod_type, prod_img

    switch (product.productId) {
        case 1:
            prod_img = citramonp
            break;
        case 2:
            prod_img = lizobact
            break;
    }

    switch (product.type) {
        case 'drugs':
            prod_type = 'Таблетки'
            break;
        case 'capsules':
            prod_type = 'Капсулы'
            break;
        case 'granules':
            prod_type = 'Гранулы'
            break;
        case 'syrup':
            prod_type = 'Сироп'
            break;
        default:
            prod_type = 'Неизвестно'
            break;
    }

    return (
        <div className="product">
            <div className="product-left">
                <div className="product-name">
                    <p>{product.title}</p>
                </div>
                <div className="product-fabricator">
                    <p>{product.fabricator}</p>
                </div>
                <div className="product-type">
                    <img src={drugs} />
                    <p>{prod_type}</p>
                </div>
                <div className="product-count">
                    <img src={pillsbottle} />
                    {product.count > 0 ? <p>{product.count} шт.</p> : <p className="product-outof">Нет в наличии</p>}
                </div>
                <div className="product-buy">
                    {product.count > 0 ?
                        <div className="primary-button product-button" id="productBuy">
                            <p>Купить</p>
                        </div>
                        :
                        <div className="primary-button product-button button-neactive">
                            <p>Купить</p>
                        </div>
                    }
                    <div className="product-price">
                        {product.price === product.actualPrice ? <p>{product.price} ₽</p> : <div className="product-row"><p className="product-oldprice">{product.price} ₽</p><p>{product.actualPrice} ₽</p></div>}
                    </div>
                </div>
            </div>
            <div className="product-right">
                <img id="drug" src={prod_img} />
            </div>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default Product;