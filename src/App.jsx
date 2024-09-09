import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import './App.css';
import SignUp from './screens/SignUp';
import Cart from './screens/Cart';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <CartProvider>
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </Router>
    </CartProvider>

  );
}

export default App;
