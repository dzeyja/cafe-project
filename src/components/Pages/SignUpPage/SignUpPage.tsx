import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes'
import { Container } from 'react-bootstrap'

import styles from './SignUpPage.module.css'
import SignUp from '../../UI/SignUp/SignUp'

const SignUpPage: FC = () => {
  return (
    <Container>
      <div className={styles.signUpWrapper}>
        <h1>Зарегесрируйтесь</h1>
        <SignUp />
        <p>
          Если зарегестрированы то <Link to={ROUTES.LOGIN}>войдите</Link>
        </p>
      </div>
    </Container>
  )
}

export default SignUpPage
