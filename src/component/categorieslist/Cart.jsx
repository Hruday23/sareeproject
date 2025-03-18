// Code Generated by Sidekick is for learning and experimentation purposes only.

import React from 'react';
import { Card, Row, Col, Button, Alert } from "react-bootstrap";
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useAuth } from './AuthContext';

const Cart = () => {
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity, notification } = useCart();
  const { user, setRedirectPath } = useAuth();
  const navigate = useNavigate();

  const handleBuy = (product) => {
    if (user) {
      navigate('/buy', { state: { product } });
    } else {
      alert('Please log in to proceed with the purchase.');
      setRedirectPath('/buy');
      navigate('/login');
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      {notification && <Alert variant="success">{notification}</Alert>}
      <Row>
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <Col xs={12} key={index} className="mb-4">
              <Card className="d-flex flex-row position-relative">
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/${product.image}`}
                  alt={product.name}
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="text-danger">Total: ${(product.price * product.quantity).toFixed(2)}</Card.Text>
                  <Card.Text>Quantity: {product.quantity}</Card.Text>
                  <Button variant="success" onClick={() => increaseQuantity(product)}> + </Button>
                  <Button variant="warning" onClick={() => decreaseQuantity(product)}> - </Button>
                  <Button variant="primary" onClick={() => handleBuy(product)}>Buy</Button>
                </Card.Body>
                <FaTrash
                  className="position-absolute"
                  style={{ top: '10px', right: '10px', cursor: 'pointer' }}
                  onClick={() => removeFromCart(product)}
                />
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <p>Your cart is empty.</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Cart;
