import React, { FC, useEffect, useState } from 'react'
import people, { IPeople } from '../../../data/sliderData'
import styles from './Slider.module.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa6'

const Slider: FC = () => {
  const [persons, setPersons] = useState<IPeople[]>(people)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    const lastIndex = persons.length - 1

    if (currentIndex < 0) {
      setCurrentIndex(lastIndex)
    }

    if (currentIndex > lastIndex) {
      setCurrentIndex(0)
    }
  }, [currentIndex])

  useEffect(() => {
    let slider = setInterval(
      () => setCurrentIndex((prevState) => prevState + 1),
      5000
    )

    return () => {
      clearInterval(slider)
    }
  }, [currentIndex])

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2>
          <span>/</span>Отзывы
        </h2>
      </div>
      <div className={styles.sectionCenter}>
        {persons.map((person: IPeople, personIndex): any => {
          const { id, title, name, image, quote } = person

          let position: string = styles.nextSlide
          if (personIndex === currentIndex) {
            position = styles.activeSlide
          }
          if (
            personIndex === currentIndex - 1 ||
            (currentIndex === 0 && personIndex === persons.length - 1)
          ) {
            position = styles.lastSlide
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className={styles.personImg} />
              <h4>{name}</h4>
              <p className={styles.title}>{title}</p>
              <p className={styles.text}>{quote}</p>
              <FaQuoteRight className={styles.icon} />
            </article>
          )
        })}

        <button
          className={styles.prev}
          onClick={() => setCurrentIndex((prevState) => prevState - 1)}
        >
          <FaChevronLeft />
        </button>
        <button
          className={styles.next}
          onClick={() => setCurrentIndex((prevState) => prevState + 1)}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Slider
