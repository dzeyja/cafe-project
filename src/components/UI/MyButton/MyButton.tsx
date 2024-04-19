import { FC, ReactNode } from 'react'
import styles from './MyButton.module.css'

interface ButtonProps {
  children: ReactNode
}

const MyButton: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.myButton}>{children}</button>
}

export default MyButton
