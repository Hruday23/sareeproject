import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sareepic from '../../assets/saree.jpg';
import lehenga from '../../assets/lehenga.jpg';
import anarkali from '../../assets/anarkali.jpg';
import ethnic from '../../assets/ethnic_cordset.jpg';
import sharara from '../../assets/sharara.jpg';
import ghagra from '../../assets/ghagra.jpg';

const Description = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        { name: 'Saree', image: sareepic, description: 'Elegant and versatile traditional Indian garment.', price: 6490, size: ['L', 'XL'], color: ['Cream', 'Pink'] },
        { name: 'Lehenga', image: lehenga, description: 'Grand and embellished outfit for special events.', price: 6490, size: ['L', 'XL'], color: ['Cream', 'Pink'] },
        { name: 'Anarkali', image: anarkali, description: 'Graceful dress with a fitted bodice and flowing skirt.', price: 6490, size: ['L', 'XL'], color: ['Cream', 'Pink'] },
        { name: 'Ethnic Co-ord Sets', image: ethnic, description: 'Stylish and coordinated traditional outfits.', price: 6490, size: ['L', 'XL'], color: ['Cream', 'Pink'] },
        { name: 'Sharara Suit', image: sharara, description: 'Stylish and coordinated traditional outfits.', price: 6490, size: ['L', 'XL'], color: ['Cream', 'Pink'] },
        { name: 'Ghagra Choli', image: ghagra, description: 'Stylish and coordinated traditional outfits.', price: 6490, size: ['L', 'XL'], color: ['Cream', 'Pink'] },
    ];

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleBackClick = () => {
        setSelectedItem(null);
    };

    if (selectedItem) {
        return (
            <div className="container my-5 bg-light p-4 rounded shadow-sm">
                <button className="btn btn-secondary mb-4" onClick={handleBackClick}>Back</button>
                <div className="row">
                    <div className="col-md-4">
                        <img src={selectedItem.image} alt={selectedItem.name} className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <h2>{selectedItem.name}</h2>
                        <p>{selectedItem.description}</p>
                        <p>MRP ₹{selectedItem.price}</p>
                        <p>Tax included.</p>
                        <div>
                            <h5>Size</h5>
                            {selectedItem.size.map((size) => (
                                <button key={size} className="btn btn-outline-secondary me-2">{size}</button>
                            ))}
                        </div>
                        <div>
                            <h5>Color</h5>
                            {selectedItem.color.map((color) => (
                                <button key={color} className="btn btn-outline-secondary me-2">{color}</button>
                            ))}
                        </div>
                        <button className="btn btn-primary mt-4">Add to Cart</button>
                        <button className="btn btn-outline-secondary mt-4 ms-2">Wishlist</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-5 bg-light p-4 rounded shadow-sm">
            <style jsx>{`
                .container {
                    background-color: #f8f9fa; /* Light grey background */
                    padding: 2rem; /* Padding around the container */
                    border-radius: 0.5rem; /* Rounded corners */
                    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); /* Subtle shadow for depth */
                }
                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr); /* 3 columns in each row */
                    gap: 1.5rem;
                }
                .grid-item {
                    position: relative;
                    overflow: hidden;
                    border-radius: 0.5rem;
                    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
                    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
                }
                .grid-item:hover {
                    transform: translateY(-0.5rem);
                    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
                    background-color: rgba(0, 0, 0, 0.5); /* Change background color on hover */
                }
                .grid-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* Make the image cover the entire grid item */
                    transition: transform 0.3s;
                }
                .grid-item:hover img {
                    transform: scale(1.1);
                }
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s;
                    border-radius: 0.5rem;
                }
                .grid-item:hover .overlay {
                    opacity: 1;
                }
                .overlay h2 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                .overlay p {
                    font-size: 1rem;
                    line-height: 1.5;
                    text-align: center;
                    margin: 0;
                }
            `}</style>
            <div className="grid-container">
                {items.map((item, index) => (
                    <div key={index} className="grid-item" onClick={() => handleItemClick(item)}>
                        <img src={item.image} alt={item.name} style={{ height: '500px' }} />
                        <div className="overlay">
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Description;
