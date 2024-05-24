import { FC } from 'react'
import { ICategories } from '../../../store/models/reduxTypes'

import styles from './Categories.module.css'

interface CategoriesProps {
  categories: ICategories[]
}

const Categories: FC<CategoriesProps> = ({ categories }) => {
  return (
    <ul className={styles.categoryNav}>
      {categories.map((category) => (
        <li key={category.id}>
          <a
            href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
            key={category.id}
            className={styles.categoryLink}
          >
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Categories
