import { Col, Container, Nav, Row } from 'react-bootstrap'
import styles from './Menu.module.css'
import Products from '../../UI/Products/Products'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { useEffect } from 'react'
import { fetchCategories } from '../../../store/slices/categoriesSlice/actionCreator'

const LeftMenu: React.FC = () => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(
    (state) => state.categoriesReducer.categories
  )

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <div className={styles.menuContainer}>
      <Container>
        <Row>
          {/*Навигация по котегориям*/}
          <Col md={2}>
            <Nav defaultActiveKey="#home" className="flex-column fixed-left">
              {categories.map((category) => (
                <Nav.Link key={category.id} href="#home">
                  {category.name}
                </Nav.Link>
              ))}
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
