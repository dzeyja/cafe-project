import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import MyButton from '../MyButton/MyButton'

import styles from './Form.module.css'

const Form: FC = () => {
  return (
    <div className={styles.bg}>
      <Container>
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <h2>Забронировать столик</h2>
            <input placeholder="Имя" type="text" />
            <input placeholder="Телефон" type="text" />
            <input placeholder="Время" type="text" />
            <MyButton>Заказать столик</MyButton>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Form
