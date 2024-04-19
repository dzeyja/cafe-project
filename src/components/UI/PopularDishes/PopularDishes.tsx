import React, { FC } from 'react'
import data from './../../../data/PopDishes'
import styles from './PopularDishes.module.css'
import MyButton from '../MyButton/MyButton'
import { Card, Col, Row, Button, Container } from 'react-bootstrap'

const PopularDishes: FC = () => {
  return (
    <Container>
      <div className="title">Наши популярные блюда</div>

      <Row>
        {data.map((pop, index) => (
          <Col key={index} className="m-2">
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src={pop.img} />

              <Card.Body>
                <Card.Title>{pop.title}</Card.Title>
                <Card.Text>{pop.desc}</Card.Text>
                <MyButton>Заказать</MyButton>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className={styles.wrapper}>
        <MyButton>Перейти в меню</MyButton>
      </div>
    </Container>
  )
}

export default PopularDishes
