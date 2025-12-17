import React from 'react';
import './App.css'; 

const ModalWindow = ({ product, onClose }) => {
    if (!product) return null; 

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>

                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                <img src={product.image_1} alt={product.name} className="modal-img" />
                <div className="modal-details">
                    <h2 className="modal-title">{product.name}</h2>
                    
                    <p className="modal-description">
                        {product.description}
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default ModalWindow;
