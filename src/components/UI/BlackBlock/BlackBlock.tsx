import { FC } from 'react'
import styles from './BlackBlock.module.css'
import MyButton from '../MyButton/MyButton'
import { Col, Container, Row } from 'react-bootstrap'

const BlackBlock: FC = () => {
  return (
    <div className={styles.blockHolder}>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col md={7}>
            <div className={styles.leftTitle}>
              Отпразднуйте в одном из
              <br /> самых лучших ресторанов.
            </div>
            <div className={styles.leftSuptitle}>
              Только в этом месяце бизнес-ланч от 250 ₽
            </div>
          </Col>
          <Col md={2} className="mt-auto mb-auto">
            <MyButton>Заказать столик</MyButton>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BlackBlock
