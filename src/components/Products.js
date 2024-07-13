import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductForm from "./ProductForm";
import ProductEdit from "./ProductEdit";


function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>All Products</h2>
        </Col>
        <Col className="text-right">
          <Link to="/ProductForm">
            <Button variant="primary">Add Products</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        {products.map((product) => (
          <Col xs={12} md={6} lg={4} key={product.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.description}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>{product.title} - ${product.price}</Card.Title>
                <Card.Text >{product.description}</Card.Text>
                <div className="btn-control">
                <Button variant="secondary" className="mr-2">
                  <Link to={`/ProductEdit/${product.id}`} className="text-white">
                    Edit
                  </Link>
                </Button>
                <Button variant="danger" onClick={() => handleDelete(product.id)}>
                  Delete
                </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Routes>
        <Route
          path="/ProductForm"
          element={<ProductForm fetchProducts={fetchProducts} />}
        />
        <Route
          path="/ProductEdit/:id"
          element={<ProductEdit fetchProducts={fetchProducts} />}
        />
      </Routes>
    </Container>
  );
}

export default Products;
