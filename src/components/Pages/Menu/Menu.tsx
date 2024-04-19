import { Col, Container, Nav, Row } from 'react-bootstrap'
import styles from './Menu.module.css'
import Products from '../../UI/Products/Products'

const LeftMenu: React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <Container>
        <Row>
          {/*Навигация по котегориям*/}
          <Col md={2}>
            <Nav defaultActiveKey="#home" className="flex-column fixed-left">
              <Nav.Link href="#home">Горячие блюда</Nav.Link>
              <Nav.Link href="#home">Завтраки</Nav.Link>
              <Nav.Link href="#about">Дисерты</Nav.Link>
              <Nav.Link href="#menu">Напитки</Nav.Link>
              <Nav.Link href="#contact">Коктейли</Nav.Link>
              <Nav.Link href="#contact">Закуски</Nav.Link>
              <Nav.Link href="#contact">Пиццы</Nav.Link>
            </Nav>
          </Col>

          {/*Товары*/}
          <Col className="d-flex flex-wrap gap-3" md={10}>
            <Products />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LeftMenu
