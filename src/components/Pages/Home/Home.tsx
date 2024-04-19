import { FC } from 'react'
import Carts from '../../UI/Carts/Carts'
import Intro from '../../UI/Intro/Intro'
import BlackBlock from '../../UI/BlackBlock/BlackBlock'
import Slider from '../../UI/Slider/Slider'
import PopularDishes from '../../UI/PopularDishes/PopularDishes'
import Form from '../../UI/BookedForm/Form'

const Home: FC = () => {
  return (
    <>
      <Intro />
      <Carts />
      <Slider />
      <BlackBlock />
      <PopularDishes />
      <Form />
    </>
  )
}

export default Home
