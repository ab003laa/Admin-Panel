import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch products when selectedCategory changes
    if (selectedCategory) {
      axios
        .get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <h3>Categories</h3>
          <ListGroup>
            {categories.map((category, index) => (
              <ListGroup.Item
                key={index}
                action
                active={selectedCategory === category}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={8}>
          <h3>Products</h3>
          {selectedCategory && (
            <Card>
              <Card.Body>
                <Card.Title>{selectedCategory} Products</Card.Title>
                <ListGroup variant="flush">
                  {products.map((product, index) => (
                    <ListGroup.Item key={index}>
                      {product.title}
                      <Button variant="primary" >
                        <Link
                          to={`/ProductEdit/${product.id}`}
                          className="text-white"
                        >
                          Edit
                        </Link>
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
