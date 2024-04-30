import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { fetchProducts } from '../../../store/slices/productsSlice/actionCraetor'
import { IProducts } from '../../../store/models/reduxTypes'
import Product from '../Product/Product'

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
    dispatch(fetchProducts('http://localhost:4000/products'))
  }, [])

  return (
    <>
      {isLoading ? (
        <h1>Идет загрузка...</h1>
      ) : (
        categories.map((category) => (
          <>
            <h2>{category.name}</h2>
            {filteredProducts
              .filter(
                (product: IProducts) => product.category === category.name
              )
              .map((product) => (
                <Product product={product} key={product.id} />
              ))}
          </>
        ))
      )}
    </>
  )
}

export default Products
