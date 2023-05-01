import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import firebase from "firebase/app";
// import "firebase/auth";
// import { firebaseConfig } from "./firebaseConfig";
// import { AuthProvider } from "./contexts/AuthContext";
// import { CartProvider } from "./contexts/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

// firebase.initializeApp(firebaseConfig);

function App() {
    const { user, loading } = useAuth();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Router>
            {/* <AuthProvider firebaseAuth={firebase.auth()}> */}
            <CartProvider>
                <Switch>
                    <Route exact path="/">
                        <ProductList />
                    </Route>
                    <Route path="/cart">
                        {user ? (
                            <Cart />
                        ) : (
                            <p>You need to sign in to view your cart.</p>
                        )}
                    </Route>
                    <Route path="/login">
                        {user ? (
                            <>
                                <p>You are already logged in.</p>
                                <button onClick={() => signOut()}>
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <Login />
                        )}
                    </Route>
                </Switch>
            </CartProvider>
            {/* </AuthProvider> */}
        </Router>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
