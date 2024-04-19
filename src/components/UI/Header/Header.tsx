import { FC, useState } from 'react'
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBasketShopping } from 'react-icons/fa6'
import FilterForm from '../FilterForm/FilterForm'
import styles from './Header.module.css'
import BasketModal from '../BasketModal/BasketModal'

const Header: FC = () => {
  const [show, setShow] = useState<boolean>(false)

  const handleOpen = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <header className={styles.header}>
      <Navbar collapseOnSelect expand="lg" className="py-3">
        <Container>
          <Navbar.Brand className={styles.logo}>Provence</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to=".">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="menu">Menu</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="about">About</Link>
              </Nav.Link>
              {/* Иконка корзины */}
              <FaBasketShopping
                onClick={handleOpen}
                className={styles.basket}
              />
            </Nav>
            {/* Filter для поиска */}
            <FilterForm />
            <BasketModal show={show} handleClose={handleClose} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
