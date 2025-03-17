import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useCart } from "../categorieslist/CartContext";
import '../categorieslist/ProductList.css'; // Import the CSS file

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <Row>
      {products.map((product, index) => (
        <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
          <Card className="hover-card">
            <Card.Img
              variant="top"
              src={` /images/${product.image}`}
              alt={product.name}
              style={{ width: "100%", height: "350px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text className="text-danger">${product.price}</Card.Text>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
