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
  const dispatch = useAppDispatch()

  const handleDeleteOrder = (id: number) => {
    dispatch(setDeleteOrder(id))
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
                  <strong>2000 KZT</strong>{' '}
                  <IoClose onClick={() => handleDeleteOrder(order.id)} />
                </div>
              </div>
            ))}
            <hr />
            <p>
              <strong>Итого: 2000 KZT</strong>
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
