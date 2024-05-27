import { FC } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import MyButton from '../../UI/MyButton/MyButton'
import { setAddOrder } from '../../../store/slices/basketSlice/basketSlice'

import styles from './ProductPage.module.css'

const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const products = useAppSelector((state) => state.productsReducer.products)
  const product = products.find((product) => product.id === Number(id))

  const dispatch = useAppDispatch()

  const handleAddOrder = () => {
    if (product) {
      dispatch(setAddOrder(product))
    } else {
      console.log('hello')
    }
  }

  return (
    <Container>
      <div className={styles.productWrapper}>
        <div className={styles.maketBg}></div>
        <div className={styles.textContent}>
          <div className={styles.prodName}>{product?.name}</div>
          <hr />
          <div className={styles.prodDesk}>{product?.description}</div>
          <div className={styles.price}>
            {product?.price} KZT <span>/ 400 грамм</span>
          </div>
          <div>Количество порций:</div>
          <MyButton onClick={handleAddOrder}>Добавить в корзину</MyButton>
        </div>
      </div>
    </Container>
  )
}

export default ProductPage
