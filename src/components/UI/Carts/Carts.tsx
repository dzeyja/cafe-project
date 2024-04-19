import { FC } from 'react'
import styles from './Carts.module.css'
import { Col, Container, Row } from 'react-bootstrap'

interface Carts {
  title: string
  suptitle: string
}

const Carts: FC = () => {
  const carts: Carts[] = [
    {
      title: 'Магичаская атмосфера',
      suptitle:
        'В нашем заведении царит магическая атмосфера наполненная вкусными ароматами',
    },
    {
      title: 'Лучшее качество еды',
      suptitle: 'Качество нашей Еды - отменное!',
    },
    {
      title: 'Недороая еда',
      suptitle:
        'Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!',
    },
  ]

  return (
    <Container>
      <div className={styles.carts}>
        <Row>
          {carts.map((cart: Carts) => (
            <Col key={cart.title} className="m-3">
              <div key={cart.title} className={styles.cart}>
                <div className={styles.title}>{cart.title}</div>
                <div className={styles.suptitle}>{cart.suptitle}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  )
}

export default Carts
