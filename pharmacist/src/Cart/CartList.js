import React from "react";
import PropTypes from "prop-types";
import CartItem from "../Cart/CartItem";
import '../Products/Product.css';

function CartList(props) {
    return (
        <div className="products">
            {props.products.map((product, index) => {
                return (
                    <CartItem product={product} setProducts={props.setProducts} products={props.products} key={product.id} index={index} />
                );
            })}
        </div>
    );
}

CartList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartList;