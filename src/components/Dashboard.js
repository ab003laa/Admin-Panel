import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);

  useEffect(() => {
    // Fetch products count
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProductCount(response.data.length))
      .catch(error => console.error(error));

    // Fetch categories count
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => setCategoryCount(response.data.length))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard-stats">
        <div className="stat">
          <h3>Products</h3>
          <p>{productCount}</p>
        </div>
        <div className="stat">
          <h3>Categories</h3>
          <p>{categoryCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
