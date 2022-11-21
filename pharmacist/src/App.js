// import Context from './context';
import { Routes, Route } from "react-router-dom";

import Main from './pages/Main';
import Info from './pages/Info';

// const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  )
}

export default App;
