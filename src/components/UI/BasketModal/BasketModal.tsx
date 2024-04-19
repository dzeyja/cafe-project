import React, { FC } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import styles from './BasketModal.module.css'
import img from '../Product/hello.jpg'

interface BasketModalProps {
  handleClose: () => void
  show: boolean
}

const BasketModal: FC<BasketModalProps> = ({ handleClose, show }) => {
  return (
    <Modal className={styles.modal} show={show} onHide={handleClose}>
      <Modal.Body>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Hello world</Card.Title>
            <Card.Text>My name is Daulet</Card.Text>
            <Button variant="primary">Click here!</Button>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  )
}

export default BasketModal
