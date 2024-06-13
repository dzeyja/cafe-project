import { FC } from 'react'
import { Container } from 'react-bootstrap'
import { MdOutlinePreview } from 'react-icons/md'
import { MdOutlineMenuBook } from 'react-icons/md'
import { MdDescription } from 'react-icons/md'
import { AiFillBank } from 'react-icons/ai'
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
              <h1 className={styles.titleInfo}>Ресторан Ugolok</h1>
              Ресторан "Ugolok" — это не просто место для приема пищи, это
              настоящий оазис в сердце города, где каждый гость может
              насладиться великолепной кухней и уютной атмосферой. Наше меню
              разработано с любовью к деталям, включая как классические блюда,
              так и современные кулинарные эксперименты. Мы гордимся
              использованием только свежих, высококачественных продуктов, чтобы
              каждое блюдо приносило настоящее удовольствие. В "Ugolok" мы
              стремимся создать для каждого гостя особую атмосферу уюта и
              гостеприимства. Наш интерьер сочетает в себе элементы современного
              дизайна с теплотой и комфортом, что делает наше заведение
              идеальным выбором для различных событий: от романтического ужина
              до делового обеда или семейного торжества.
            </div>
            <div className={styles.leftTextContent}>
              <div>
                <h1 className={styles.titleInfo}>
                  Описание <MdDescription />
                </h1>
                Ресторан "Ugolok" — это место, где каждый гость может найти
                что-то по своему вкусу. Мы предлагаем широкий ассортимент блюд,
                начиная от классических салатов и заканчивая изысканными
                десертами.
              </div>
              <div>
                <h1 className={styles.titleInfo}>
                  Меню <MdOutlineMenuBook />
                </h1>
                Наше меню включает разнообразные салаты, основные блюда, десерты
                и напитки. Мы гордимся качеством и вкусом наших блюд, которые
                готовятся из свежих и натуральных продуктов.
              </div>
              <div>
                <h1 className={styles.titleInfo}>
                  Атмосфера <AiFillBank />
                </h1>
                В ресторане "Ugolok" царит уютная и гостеприимная атмосфера,
                идеально подходящая как для деловых встреч, так и для семейных
                ужинов. Мы создали интерьер, который располагает к приятному
                времяпрепровождению.
              </div>
              <div>
                <h1 className={styles.titleInfo}>
                  Отзывы <MdOutlinePreview />
                </h1>
                Наши гости ценят ресторан "Ugolok" за высокое качество
                обслуживания, вкусную еду и комфортную обстановку. Мы стремимся
                сделать каждое посещение нашего ресторана незабываемым.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutCafe
