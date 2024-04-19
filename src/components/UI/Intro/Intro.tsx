import React, { FC } from 'react'
import styles from './Intro.module.css'
import MyButton from '../MyButton/MyButton'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const Intro: FC = () => {
  return (
    <main className={styles.main}>
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className={styles.introText}>
              Добро пожаловат в
              <div className={styles.suptitle}>Наш ресторан</div>
              <div className={styles.suptitleWhite}>Дом лучшей еды</div>
              <Link to="menu">
                <MyButton>ПРЕЙТИ В МЕНЮ</MyButton>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Intro
