import React, { FC } from 'react'
import MyButton from '../MyButton/MyButton'
import styles from './Form.module.css'

const Form: FC = () => {
  return (
    <div className="container">
      <div className="title">Зобронируйте столик на ваш лучший вечер</div>

      <form className={styles.form}>
        <input placeholder="Имя" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Место для брони" type="text" />
        <MyButton>Click Here!</MyButton>
      </form>
    </div>
  )
}

export default Form
