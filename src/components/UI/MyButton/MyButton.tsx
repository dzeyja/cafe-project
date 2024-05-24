import { FC, ReactNode } from 'react'
import styles from './MyButton.module.css'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

const MyButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.myButton}>
      {children}
    </button>
  )
}

export default MyButton
