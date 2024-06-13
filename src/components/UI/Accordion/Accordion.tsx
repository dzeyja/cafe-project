import React, { FC } from 'react'
import { Accordion, Container } from 'react-bootstrap'

import styles from './Accordion.module.css'

const AccordionItems: FC = () => {
  return (
    <Container>
      <div className={styles.title}>Часто задаваемые вопросы?</div>
      <Accordion defaultActiveKey="0" flush className={styles.accordion}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Какие часы работы у ресторана?</Accordion.Header>
          <Accordion.Body>
            Ресторан "Ugolok" открыт ежедневно с 11:00 до 23:00.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Можно ли забронировать столик заранее?
          </Accordion.Header>
          <Accordion.Body>
            Да, вы можете забронировать столик заранее, связавшись с нами по
            телефону или через наш сайт.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Какие кухни представлены в меню ресторана?
          </Accordion.Header>
          <Accordion.Body>
            В нашем меню вы найдете блюда европейской и средиземноморской
            кухонь, а также авторские десерты.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Есть ли у вас вегетарианские и веганские опции в меню?
          </Accordion.Header>
          <Accordion.Body>
            Да, у нас есть разнообразные вегетарианские и веганские блюда на
            выбор.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Какие способы оплаты принимаются в ресторане?
          </Accordion.Header>
          <Accordion.Body>
            Мы принимаем оплату наличными и кредитными картами Visa и
            MasterCard.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default AccordionItems
