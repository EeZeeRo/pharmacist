import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import Loader from '../Loader';
import { useNavigate } from "react-router-dom";
import CartList from '../Cart/CartList';

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
                        <select name="cart-tab">
                            <option value="pickup">Самовывоз</option>
                            <option value="delivery">Доставка</option>
                        </select>
                        <div className="cart-main-body">
                            <div className="cart-main-info">
                                <div className="cart-main-row">
                                    <input type="text" name="address" placeholder="Ваш адрес" required/>
                                </div>
                                <div className="cart-main-row">
                                    <input type="text" name="home" placeholder="Дом" required/>
                                    <input type="text" name="flat" placeholder="Квартира" required/>
                                    <input type="submit" name="pay" value="Оплатить" />
                                </div>
                                <div className="cart-products">
                                    <div className="cart-products-title">
                                        <p>Товары в корзине</p>
                                    </div>
                                    <div className="cart-products-list">
                                        {loading && <Loader />}
                                        {products.length ? <CartList products={products[0]} setProducts={setProducts} /> : loading ? null : <p>Корзина пуста</p>}
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