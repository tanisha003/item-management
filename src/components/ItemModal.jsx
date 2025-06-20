import React from 'react';
import { Modal, Carousel, Button } from 'react-bootstrap';

const ItemModal = ({ item, onClose }) => {
  return (
    <Modal show onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Type:</strong> {item.type}</p>
        <p>{item.description}</p>
        <Carousel>
          <Carousel.Item>
            <img src={URL.createObjectURL(item.cover)} className="d-block w-100" alt="cover" />
          </Carousel.Item>
          {item.images.map((img, i) => (
            <Carousel.Item key={i}>
              <img src={URL.createObjectURL(img)} className="d-block w-100" alt={`img-${i}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        <Button variant="primary" onClick={() => alert('Enquiry email sent!')}>Enquire</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;