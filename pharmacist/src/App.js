// import Context from './context';
import { Routes, Route } from "react-router-dom";

import Main from './pages/Main';
import Info from './pages/Info';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import Notfound from './pages/Notfound';

// const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App;
