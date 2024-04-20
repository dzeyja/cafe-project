import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { fetchProducts } from '../../../store/slices/productsSlice/actionCraetor'
import { IProducts } from '../../../store/models/reduxTypes'
import Product from '../Product/Product'

const Products: FC = () => {
  const { products, isLoading, error } = useAppSelector(
    (state) => state.productsReducer
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
    dispatch(fetchProducts('https://jsonplaceholder.typicode.com/users'))
  }, [])

  return (
    <>
      {isLoading ? (
        <h1>Идет загрузка...</h1>
      ) : (
        filteredProducts.map((product: IProducts) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </>
  )
}

export default Products
