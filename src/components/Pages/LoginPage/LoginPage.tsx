import React, { FC } from 'react'
import { ROUTES } from '../../../utils/routes'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import styles from './LoginPage.module.css'
import Login from '../../UI/Login/Login'

const LoginPage: FC = () => {
  return (
    <Container>
      <div className={styles.loginWrapper}>
        <h1>Войдите</h1>
        <Login />
        <p>
          Или <Link to={ROUTES.REGISTER}>зарегесрируйтесь</Link>
        </p>
      </div>
    </Container>
  )
}

export default LoginPage
