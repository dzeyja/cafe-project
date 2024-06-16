import React, { ChangeEvent, FC, FormEvent, useState } from 'react'

import styles from './FormAuth.module.css'

interface FormAuthProps {
  title: string
  handleClick: (email: string, password: string) => void
}

const FormAuth: FC<FormAuthProps> = ({ title, handleClick }) => {
  const [auth, setAuth] = useState({ email: '', password: '' })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleClick(auth.email, auth.password)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setAuth({ ...auth, email: e.target.value })
        }
      />
      <input
        placeholder="Пароль"
        type="password"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setAuth({ ...auth, password: e.target.value })
        }
      />
      <button type="submit">{title}</button>
    </form>
  )
}

export default FormAuth
