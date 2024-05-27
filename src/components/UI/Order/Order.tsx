import { FC } from 'react'
import { IProducts } from '../../../store/models/reduxTypes'
import { Button } from 'react-bootstrap'
import img from '../../../images/nolinski_le_restaurant_15_guillaume_de_laubier-1-1200x801.jpg'

import styles from './Order.module.css'

interface OrderProps {
  order: IProducts
  handleDeleteOrderById: (value: number) => void
}

const Order: FC<OrderProps> = ({ order, handleDeleteOrderById }) => {
  return (
    <div key={order.id} className={styles.order}>
      <div className={styles.orderLeft}>
        <img src={img} alt="" />
        <h1 className={styles.orderTitle}>{order.name}</h1>
      </div>
      <div className={styles.orderRight}>
        <strong>{order.price}KZT</strong>

        <Button
          onClick={() => handleDeleteOrderById(order.id)}
          variant="primary"
        >
          Удалить
        </Button>
      </div>
    </div>
  )
}

export default Order
