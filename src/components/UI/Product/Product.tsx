import { Button, Card } from 'react-bootstrap'
import styles from './Products.module.css'
import img from './hello.jpg'
import { FC } from 'react'
import { IProducts } from '../../../store/models/reduxTypes'

interface ProductProps {
  product: IProducts
}

const Product: FC<ProductProps> = ({ product }) => {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.email}</Card.Text>
        <Button variant="primary">Click here!</Button>
      </Card.Body>
    </Card>
  )
}

export default Product
