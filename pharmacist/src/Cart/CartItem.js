import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../Products/Product.css";
import drugs from "../assets/img/drugs.png";
import pillsbottle from "../assets/img/pillsbottle.png";

import citramonp from "../assets/img/products/citramonp.jpg";
import lizobact from "../assets/img/products/lizobact.jpg";

function CartItem({ product, setProducts, products }) {
    let prod_type, prod_img;

    function deleteCartItem(id) {
        return function () {
            let cartList = localStorage.getItem("cart");

            if (cartList) {
                cartList = cartList.split(" ,");

                cartList = cartList.filter((obj) => JSON.parse(obj).id !== id);

                let prodFilter = products.filter((obj) => obj.id !== id);
                cartList = cartList.join(" ,");

                localStorage.setItem("cart", cartList);
                setProducts([[...prodFilter]]);
            }
        };
    }

    switch (product.productId) {
        case 1:
            prod_img = citramonp;
            break;
        case 2:
            prod_img = lizobact;
            break;
    }

    switch (product.type) {
        case "drugs":
            prod_type = "Таблетки";
            break;
        case "capsules":
            prod_type = "Капсулы";
            break;
        case "granules":
            prod_type = "Гранулы";
            break;
        case "syrup":
            prod_type = "Сироп";
            break;
        default:
            prod_type = "Неизвестно";
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
                    {<p>{product.count} шт.</p>}
                </div>
                <div className="product-buy">
                    {
                        <div
                            className="negative-button product-button"
                            onClick={deleteCartItem(product.id)}
                        >
                            <p>Удалить</p>
                        </div>
                    }
                    <div className="product-price">
                        {<p>{product.count * product.actualPrice} ₽</p>}
                    </div>
                </div>
            </div>
            <div className="product-right">
                <img id="drug" src={prod_img} />
            </div>
        </div>
    );
}

CartItem.propTypes = {
    product: PropTypes.object.isRequired,
    index: PropTypes.number,
};

export default CartItem;
