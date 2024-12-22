import React from 'react';
import './Modal.css'; // Ensure you're importing the correct CSS file

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null; // If modal is not open, return nothing

    return (
        <div className="modal-container">
            <div className="modal-box">
                <button className="modal-close-btn" onClick={onClose}>&#x2715;</button>
                <h2 className="modal-title">Stay with us</h2>
                <form className="modal-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Phone:</label>
                        <input type="text" id="phone" name="phone" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                        {/* <button type="button" onClick={onClose}>Cancel</button> */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;
