import { FC } from 'react'
import { Container } from 'react-bootstrap'
import img from '../../../images/nolinski_le_restaurant_15_guillaume_de_laubier-1-1200x801.jpg'

import styles from './AboutCafe.module.css'

const AboutCafe: FC = () => {
  return (
    <Container>
      <div className={styles.aboutWrapper}>
        <div>
          <div className={styles.title}>О ресторане</div>
          <img src={img} alt="alt" className={styles.img} />
          <div className={styles.textContent}>
            <div>
              <h1 className={styles.titleInfo}>Hello world</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              molestiae placeat dolor, fuga nisi reprehenderit assumenda
              voluptas ipsa eveniet ex. Consequatur porro totam unde, expedita
              pariatur sed molestiae deleniti? Delectus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Non molestiae placeat dolor,
              fuga nisi reprehenderit assumenda voluptas ipsa eveniet ex.
              Consequatur porro totam unde, expedita pariatur sed molestiae
              deleniti? Delectus.
            </div>
            <div className={styles.leftTextContent}>
              <div>
                <h1 className={styles.titleInfo}>Hello world</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis rerum amet porro pariatur aspernatur et minima nam
                distinctio!
              </div>
              <div>
                <h1 className={styles.titleInfo}>Hello world</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis rerum amet porro pariatur aspernatur et minima nam
                distinctio!
              </div>
              <div>
                <h1 className={styles.titleInfo}>Hello world</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis rerum amet porro pariatur aspernatur et minima nam
                distinctio!
              </div>
              <div>
                <h1 className={styles.titleInfo}>Hello world</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis rerum amet porro pariatur aspernatur et minima nam
                distinctio!
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutCafe
