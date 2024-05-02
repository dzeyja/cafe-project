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
            <ul className={styles.categoryNav}>
              {categories.map((category) => (
                <li key={category.id}>
                  <a
                    href={`#${category.name
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                    key={category.id}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
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
