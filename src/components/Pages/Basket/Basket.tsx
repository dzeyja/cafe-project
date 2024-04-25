import React, { FC } from 'react'
import styles from './Basket.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useAppSelector } from '../../../hooks/reduxHooks'
import { IoClose } from 'react-icons/io5'
import img from '../../UI/Product/hello.jpg'

const Basket: FC = () => {
  const orders = useAppSelector((state) => state.basketReducer)

  return (
    <div className={styles.basket}>
      <Container>
        <Row>
          <Col md={8}>
            {orders.map((order) => (
              <div className={styles.order}>
                <div className={styles.orderLeft}>
                  <img src={img} alt="" />
                  <h1 className={styles.orderTitle}>{order.name}</h1>
                </div>
                <div className={styles.orderRight}>
                  <strong>2000 KZT</strong>
                  <IoClose />
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
