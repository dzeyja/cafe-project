import { FC, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { FaBasketShopping } from 'react-icons/fa6'
import { ROUTES } from '../../../utils/routes'
import FilterForm from '../FilterForm/FilterForm'
import BasketModal from '../BasketModal/BasketModal'

import styles from './Header.module.css'
import { useAppSelector } from '../../../hooks/reduxHooks'

const Header: FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const email = useAppSelector((state) => state.userReducer.email)

  return (
    <header className={styles.header}>
      <Navbar collapseOnSelect expand="lg" className="py-3">
        <Container>
          <Navbar.Brand className={styles.logo}>Ugolok</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.links
                  }
                  to={ROUTES.HOME}
                >
                  Главная
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.links
                  }
                  to={ROUTES.MENU}
                >
                  Меню
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.links
                  }
                  to={ROUTES.ABOUT}
                >
                  Контакты
                </NavLink>
              </Nav.Link>
              {/* Иконка корзины */}
              <FaBasketShopping
                onClick={() => setShow(true)}
                className={styles.basket}
              />
            </Nav>
            <p className={styles.auth}>
              {email ? (
                <Link to={ROUTES.USERPAGE}>{email}</Link>
              ) : (
                <>
                  <Link to={ROUTES.REGISTER}>Зарегестрироватся</Link> или{' '}
                  <Link to={ROUTES.LOGIN}>войти</Link>
                </>
              )}
            </p>
            {/* Filter для поиска */}
            <FilterForm />
            {show && <BasketModal setShow={setShow} />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
