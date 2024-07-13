import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import ProductEdit from './components/ProductEdit'
import Categories from './components/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';


const PrivateRoute = ({ children }) => {
  return localStorage.getItem('auth') ? children : <Navigate to="/login" />;
};


function App() {

  
  return (
    <Router>
      <div className="admin-panel">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />}  />
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
            <Route path="/products"element={<PrivateRoute> <Products /> </PrivateRoute>} />
            <Route path="/ProductForm" element={<PrivateRoute><ProductForm /></PrivateRoute>}/>
            <Route path="/ProductEdit/:id"element={<PrivateRoute> <ProductEdit /> </PrivateRoute>}/>
            <Route path="/categories" element={<PrivateRoute><Categories /></PrivateRoute>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
