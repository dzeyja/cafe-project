import { FC } from 'react'
import Carts from '../../UI/Carts/Carts'
import Intro from '../../UI/Intro/Intro'
import BlackBlock from '../../UI/BlackBlock/BlackBlock'
import Slider from '../../UI/Slider/Slider'
import Form from '../../UI/BookedForm/Form'
import AboutCafe from '../../UI/AboutCafe/AboutCafe'

const Home: FC = () => {
  return (
    <>
      <Intro />
      <Carts />
      <Slider />
      <BlackBlock />
      <AboutCafe />
      <Form />
    </>
  )
}

export default Home
