import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import Loader from '../Loader';
import { useNavigate } from "react-router-dom";
import CartList from '../Cart/CartList';
import '../assets/css/Cart.css';

const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
};

export default function Cart(){
    const [dbprods, setDBProds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("isAuth")) {
            navigate("/login");
        }

        fetchJson('http://localhost:3001/products')
            .then(dbprods => {
                let cartList = localStorage.getItem('cart')
            
                if (cartList){
                    cartList = cartList.split(' ,');

                    let arr = [];
            
                    for (let prod of dbprods) {
                        for(let cart of cartList){
                            cart = JSON.parse(cart);
                            if (prod.id == cart.id){
                                prod.count = cart.count
                                
                                arr = [...arr, prod];
                            }
                        }
                    }

                    setProducts([...products, arr])
                }
            })
            .then(setLoading(false))
    }, []);

    return(
        <div className="wrapper">
            <section className="section-header">
                <div className="container">
                    <Header />
                </div>
            </section>
            <section className="section-cart">
                <div className="container">
                    <p className="cart-title">Получение товаров</p>
                    <div className="cart-main">
                        <div className="cart-main-tab">
                            <label htmlFor="deliveryType1">
                                <input id="deliveryType1" name="delivery_type" type="radio" checked />
                                <p>Самовывоз</p>
                            </label>
                            <label htmlFor="deliveryType2">
                                <input id="deliveryType2" name="delivery_type" type="radio" />
                                <p>Доставка</p>
                            </label>
                        </div>
                        <div className="cart-main-body">
                            <div className="cart-main-info">
                                <div className="cart-main-row full-row">
                                    <input type="text" name="address" placeholder="Ваш адрес" required/>
                                </div>
                                <div className="cart-main-row">
                                    <input type="number" id="inputHome" name="home" placeholder="Дом" required/>
                                    <input type="number" id="inputApart" name="flat" placeholder="Квартира" required/>
                                    <input type="submit" id="inputSubmit" name="pay" value="Оплатить" />
                                </div>
                                <div className="cart-products">
                                    <div className="cart-products-title">
                                        <p>Товары в корзине</p>
                                    </div>
                                    <div className="cart-products-list">
                                        {loading && <Loader />}
                                        {products.length ? <CartList products={products[0]} setProducts={setProducts} /> : loading ? null : <p class="cart-empty">Корзина пуста</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}