import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('auth', 'true');
      navigate('/products');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="w-50">
        <h2 className="text-center mb-4">Login Page</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username : admin"
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password : admin"
            />
          </Form.Group>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          <Button variant="primary" type="submit" className="mt-3 w-100">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
