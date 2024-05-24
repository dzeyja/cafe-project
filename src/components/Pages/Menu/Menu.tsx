import { Col, Container, Nav, Row } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { useEffect } from 'react'
import { fetchCategories } from '../../../store/slices/categoriesSlice/actionCreator'
import Products from '../../UI/Products/Products'

import styles from './Menu.module.css'
import Categories from '../../UI/Categories/Categories'

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
            <Categories categories={categories} />
          </Col>

          {/*Товары*/}
          <Col md={10}>
            <Products />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LeftMenu
