import React, { useEffect } from 'react';
import './Modal.css'; // Ensure you're importing the correct CSS file
import { useState } from 'react';
import axios from 'axios'; 
function Modal({ isOpen, onClose }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, number);
        const data = {
            Name: name,
            Email: email,
            Number: number,
        };

        axios.post('https://api.sheetbest.com/sheets/ca77a88b-1842-460b-9533-59b109054b32', data).then((response) => {
            // console.log(response);
            // Swal.fire('We Appreciate Your Inquiry', "Will get back to you soon", 'success');
           
            onClose();
            setName('');
            setEmail('');
            setNumber('');
        });
       
    };

    // Always render the modal, but return null if it should be hidden
    if (!isOpen) return null; // If modal is not open, return nothing

    return (
        <div className="modal-container" onClick={handleContainerClick}>
            <div className="modal-box" onClick={handleModalClick}>
                <button className="modal-close-btn" onClick={onClose}>&#x2715;</button>
                <h2 className="modal-title">Stay with us</h2>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            type="text"
                            id="name"
                            name="name"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            value={number}
                            required
                            onChange={(e) => setNumber(e.target.value)}
                            type="text"
                            id="phone"
                            name="phone"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="text"
                            id="email"
                            name="email"
                            // required
                        />
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
