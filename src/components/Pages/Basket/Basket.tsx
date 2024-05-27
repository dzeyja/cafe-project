import { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { setDeleteOrder } from '../../../store/slices/basketSlice/basketSlice'
import Order from '../../UI/Order/Order'

import styles from './Basket.module.css'

const Basket: FC = () => {
  const orders = useAppSelector((state) => state.basketReducer)
  const dispatch = useAppDispatch()

  const handleDeleteOrderById = (id: number) => {
    dispatch(setDeleteOrder(id))
  }

  const totalPrice = orders.reduce((sum, order) => sum + order.price, 0)

  return (
    <div className={styles.basket}>
      <Container>
        <h1 className={styles.title}>Корзина товаров</h1>
        <Row>
          <Col md={8}>
            {orders.map((order) => (
              <Order
                order={order}
                handleDeleteOrderById={handleDeleteOrderById}
              />
            ))}
          </Col>
          <Col md={4}>
            <p className={styles.totalPrice}>
              Заказ на сумму: {totalPrice} KZT
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Basket
