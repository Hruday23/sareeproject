import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
const Index = () => {
  return (
    <div style={{ display: 'block', padding: 30 }}>
    <Carousel>
    <Carousel.Item interval={500}>
    <img
    className="d-block w-100"
    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
    alt="Image One"
    />
   
    </Carousel.Item>
    <Carousel.Item interval={500}>
    <img
    className="d-block w-100"
    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
    alt="Image Two"
    />

    </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Index
