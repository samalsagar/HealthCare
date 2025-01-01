import React, { useEffect } from 'react';
import './Modal.css'; // Ensure you're importing the correct CSS file

function Modal({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Re-enable scrolling when modal is closed
        }

        // Cleanup the effect when the component is unmounted or the modal is closed
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleModalClick = (e) => {
        // Prevent the modal box click event from closing the modal
        e.stopPropagation();
    };

    const handleContainerClick = () => {
        onClose(); // Close the modal when clicking outside the modal box
    };

    if (!isOpen) return null; // If modal is not open, return nothing

    return (
        <div className="modal-container" onClick={handleContainerClick}>
            <div className="modal-box" onClick={handleModalClick}>
                <button className="modal-close-btn" onClick={onClose}>&#x2715;</button>
                <h2 className="modal-title">Stay with us</h2>
                <form className="modal-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;
