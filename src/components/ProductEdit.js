import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function ProductEdit({ fetchProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct({
        ...product,
        image: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://fakestoreapi.com/products/${id}`, product)
      .then((response) => {
        fetchProducts();
        navigate("/products");
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = () => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        fetchProducts();
        navigate("/products");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <h2 className="my-4">Edit Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" onChange={handleImageChange} />
          {product.image && <img src={product.image} alt="Preview" style={{ width: "100px", height: "100px" }} />}
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Product
        </Button>
        <Button variant="danger" onClick={handleDelete} className="ml-2">
          Delete Product
        </Button>
      </Form>
    </Container>
  );
}

export default ProductEdit;
