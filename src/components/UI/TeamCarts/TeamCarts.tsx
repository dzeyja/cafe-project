import React, { FC } from 'react'
import DynamicRenderImg from '../../Helpers/DynamicRenderImg'
import styles from './TeamCarts.module.css'

const TeamCarts: FC = () => {
  const imgUrl: string[] = [
    './../../../images/OurTeam/IMG_0649.jpg',
    './../../../images/OurTeam/IMG_0650.jpg',
    './../../../images/OurTeam/IMG_0653.jpg',
    './../../../images/OurTeam/IMG_0659.jpg',
    './../../../images/OurTeam/IMG_0660.jpg',
    './../../../images/OurTeam/IMG_0662.jpg',
    './../../../images/OurTeam/IMG_0675.jpg',
    './../../../images/OurTeam/IMG_3220.png',
    './../../../images/OurTeam/IMG_4359.jpg',
  ]

  return (
    <div className={styles.OurTeam}>
      <div className="container">
        <h1 className={styles.title}>
          Наша <span>команда</span>
        </h1>
        <div className={styles.TeamCarts}>
          {imgUrl.map((image, index) => (
            <div className={styles.TeamCart} key={index}>
              <DynamicRenderImg
                className={styles.image}
                src={image}
                alt={`${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamCarts
