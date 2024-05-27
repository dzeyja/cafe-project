import { FC } from 'react'
import { Spinner } from 'react-bootstrap'

import styles from './Loader.module.css'

const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <Spinner animation="border" variant="warning" />
    </div>
  )
}

export default Loader
