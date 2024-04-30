import React, { FC } from 'react'
import styles from './Basket.module.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { IoClose } from 'react-icons/io5'
import img from '../../UI/Product/hello.jpg'
import { setDeleteOrder } from '../../../store/slices/basketSlice/basketSlice'

const Basket: FC = () => {
  const orders = useAppSelector((state) => state.basketReducer)
  const dispatch = useAppDispatch()

  const handleDeleteOrderById = (id: number) => {
    dispatch(setDeleteOrder(id))
  }

  return (
    <div className={styles.basket}>
      <Container>
        <h1 className={styles.title}>Корзина товаров</h1>
        <Row>
          <Col md={8}>
            {orders.map((order) => (
              <div className={styles.order}>
                <div className={styles.orderLeft}>
                  <img src={img} alt="" />
                  <h1 className={styles.orderTitle}>{order.name}</h1>
                </div>
                <div className={styles.orderRight}>
                  <strong>2000KZT</strong>

                  <Button
                    onClick={() => handleDeleteOrderById(order.id)}
                    variant="primary"
                  >
                    Удалить
                  </Button>
                </div>
              </div>
            ))}
          </Col>
          <Col md={4}>
            <p className={styles.totalPrice}>Заказ на сумму: 1200 KZT</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Basket
