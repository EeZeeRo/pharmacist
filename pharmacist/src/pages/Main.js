import React from 'react';
import {useState, useEffect} from 'react'
import Header from '../Header/Header';
import Loader from '../Loader';
import Search from '../Search/Search';
import ProductList from '../Products/ProductList';

const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
};

function Main(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    fetchJson('http://localhost:3001/products')
        .then(products => {
            setProducts(products)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])
    // function toggleTodo(id){
    //   setTodos(
    //     todos.map(todo => {
    //       if (todo.id === id){
    //         todo.completed = !todo.completed
    //       }
    //       return todo
    //     })
    //   )
    // }

    // function removeTodo(id){
    //   setTodos(todos.filter(todo => todo.id !== id))
    // }

    // function addTodo(title){
    //   setTodos(
    //     todos.concat([
    //       {
    //         title, 
    //         id: Date.now(),
    //         completed: false
    //       }
    //     ])
    //   )
    // }

    return (
    <div className='wrapper'>
        <section className='section-header'>
        <div className='container'>
            <Header />
        </div>
        </section>
        <section className='section-search'>
        <div className='container'>
            <Search />
        </div>
        </section>
        <section className='section-products'>
        <div className='container'>
            {loading && <Loader />}
            {products.length ? <ProductList products={products} /> : loading ? null : <p>Отсутствуют продукты</p>}
        </div>
        </section>
        {/* <Modal /> */}

        {/* <React.Suspense fallback={<Loader />}>
        <AddTodo onCreate={addTodo}/>
        </React.Suspense> */}

        {/* {loading && <Loader />} */}
        
    </div>
    );
}

export default Main;