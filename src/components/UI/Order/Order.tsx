import { FC } from 'react'
import { IProducts } from '../../../store/models/reduxTypes'
import { Button } from 'react-bootstrap'

import styles from './Order.module.css'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import {
  decrementCount,
  incrementCount,
} from '../../../store/slices/productsSlice/productsSlice'
import MyButton from '../MyButton/MyButton'

interface OrderProps {
  order: IProducts
  handleDeleteOrderById: (value: number) => void
}

const Order: FC<OrderProps> = ({ order, handleDeleteOrderById }) => {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.productsReducer.products)
  const product = products.find((p) => p.id === order.id)

  const incrementClick = (id: number) => {
    dispatch(incrementCount(id))
  }
  const decrementCLick = (id: number) => {
    dispatch(decrementCount(id))
  }

  return (
    <div key={order.id} className={styles.order}>
      <div className={styles.orderLeft}>
        <img src={order?.img} alt="" />
        <h1 className={styles.orderTitle}>{order.name}</h1>
      </div>
      <div className={styles.orderRight}>
        <div className={styles.counter}>
          <button
            className={styles.incrementBtn}
            onClick={() => incrementClick(order.id)}
          >
            +
          </button>
          <p className={styles.count}>{product?.count}</p>
          <button
            className={styles.decrementBtn}
            onClick={() => decrementCLick(order.id)}
          >
            -
          </button>
        </div>
        <strong>{order.price}KZT</strong>

        <MyButton onClick={() => handleDeleteOrderById(order.id)}>
          Удалить
        </MyButton>
      </div>
    </div>
  )
}

export default Order
