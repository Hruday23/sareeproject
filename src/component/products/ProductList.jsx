import React from "react";
import {  Card, Row, Col } from "react-bootstrap";

const ProductList = ({ products }) => (

  <Row>
    {products.map((product, index) => (
      <Col md={6} lg={4} key={index} className="mb-4">
        <Card>
          <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={product.name} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text className="text-danger">{product.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  
);

export default ProductList;
