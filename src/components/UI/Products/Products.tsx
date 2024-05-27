import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { fetchProducts } from '../../../store/slices/productsSlice/actionCraetor'
import { IProducts } from '../../../store/models/reduxTypes'
import Product from '../Product/Product'
import Loader from '../Loader/Loader'
import styles from './Products.module.css'

const Products: FC = () => {
  const { products, isLoading } = useAppSelector(
    (state) => state.productsReducer
  )
  const categories = useAppSelector(
    (state) => state.categoriesReducer.categories
  )
  const { title } = useAppSelector((state) => state.filterReducer)
  const dispatch = useAppDispatch()

  {
    /*Филтр для пойиска блюд, фильтруем массив с продкутами*/
  }
  const filteredProducts = products.filter((product) => {
    const matchedTitle = product.name
      .toLowerCase()
      .includes(title.toLowerCase())
    return matchedTitle
  })

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : categories.length === 0 ? (
        <h1>Ничего не найдено</h1>
      ) : (
        categories.map((category) => (
          <div key={category.id}>
            <h2
              id={category.name.toLowerCase().replace(/\s+/g, '-')}
              className={styles.productsCategory}
            >
              {category.name}
            </h2>{' '}
            {/* Отфильтрованные продукты по категориям */}
            <div className={styles.productsWrapper}>
              {filteredProducts
                .filter(
                  (product: IProducts) => product.category === category.name
                )
                .map((product) => (
                  <Product product={product} key={product.id} />
                ))}
            </div>
          </div>
        ))
      )}
    </>
  )
}

export default Products
