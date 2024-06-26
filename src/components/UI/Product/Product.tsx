import { Button, Card } from 'react-bootstrap'
import { FC, MouseEvent } from 'react'
import { IProducts } from '../../../store/models/reduxTypes'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { setAddOrder } from '../../../store/slices/basketSlice/basketSlice'
import { useNavigate } from 'react-router-dom'

import styles from './Products.module.css'

interface ProductProps {
  product: IProducts
}

const Product: FC<ProductProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  const router = useNavigate()

  const handleAddOrder = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(setAddOrder(product))
  }

  return (
    <Card
      onClick={() => router(`/products/${product.id}`)}
      className={styles.card}
    >
      <Card.Img
        variant="top"
        className={styles.img}
        src={product.img}
        alt={product.name}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price} KZT</Card.Text>
        <Button onClick={handleAddOrder} variant="primary">
          Добавть в корзину
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Product
