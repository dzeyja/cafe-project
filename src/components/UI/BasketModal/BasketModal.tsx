import React, { FC } from 'react'
import { IoClose } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { setDeleteOrder } from '../../../store/slices/basketSlice/basketSlice'
import { Link } from 'react-router-dom'
import styles from './BasketModal.module.css'
import MyButton from '../MyButton/MyButton'

interface BasketModalProps {
  setShow: (value: boolean) => any
}

const BasketModal: FC<BasketModalProps> = ({ setShow }) => {
  const orders = useAppSelector((state) => state.basketReducer)
  const counter = orders.reduce((count, order) => count + order.count, 0)
  const dispatch = useAppDispatch()

  const handleDeleteOrder = (id: number) => {
    dispatch(setDeleteOrder(id))
  }

  let totalPrice

  if (counter > 0) {
    totalPrice = orders.reduce(
      (sum, order) => sum + order.price * order.count,
      0
    )
  } else {
    totalPrice = orders.reduce((sum, order) => sum + order.price, 0)
  }

  return (
    <>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {orders.length === 0 ? (
          <h1 className={styles.basketEmpty}>Корзина пуста</h1>
        ) : (
          <div>
            {orders.map((order) => (
              <div key={order.id} className={styles.viewModal}>
                <h3>{order.name}</h3>
                <div className={styles.actions}>
                  <strong>{order.price} KZT</strong>{' '}
                  <IoClose onClick={() => handleDeleteOrder(order.id)} />
                </div>
              </div>
            ))}
            <hr />
            <p>
              <strong>Итого: {totalPrice} KZT</strong>
            </p>
            <Link to="basket">
              <MyButton onClick={() => setShow(false)}>Оформить заказ</MyButton>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default BasketModal
