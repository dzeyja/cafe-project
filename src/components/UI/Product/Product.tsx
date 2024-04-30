import { Button, Card } from 'react-bootstrap'
import styles from './Products.module.css'
import img from './hello.jpg'
import { FC } from 'react'
import { IProducts } from '../../../store/models/reduxTypes'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { setAddOrder } from '../../../store/slices/basketSlice/basketSlice'

interface ProductProps {
  product: IProducts
}

const Product: FC<ProductProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  const handleAddOrder = () => {
    dispatch(setAddOrder(product))
  }

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button onClick={handleAddOrder} variant="primary">
          Добавть в корзину
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Product
