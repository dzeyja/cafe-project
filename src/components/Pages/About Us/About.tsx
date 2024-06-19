import React from 'react'
import { Container } from 'react-bootstrap'

import styles from './About.module.css'

const About = () => {
  return (
    <Container>
      <div className={styles.contactsWrapper}>
        <div className={styles.titleOne}>Контакты</div>
        <ul>
          <li className={styles.contentListItem}>
            <div className={styles.titleTwo}>Адрес</div>
            <p>Алматы, Казахстан</p>
          </li>
          <li className={styles.contentListItem}>
            <div className={styles.titleTwo}>Telegram / WhatsApp</div>
            <p>
              <a href="tel:+79051234567">+7 (905) 123-45-67</a>
            </p>
          </li>
          <li className={styles.contentListItem}>
            <div className={styles.titleTwo}>Email</div>
            <p>
              <a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default About
