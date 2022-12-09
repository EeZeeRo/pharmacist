import React from "react";
import PropTypes from 'prop-types';
import Product from './Product';
import './Product.css';

function ProductList(props) {
    return (
        <div className="products">
            {props.products.map((product, index) => {
                return <Product product={product} key={product.id} index={index} />
            })}
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProductList;