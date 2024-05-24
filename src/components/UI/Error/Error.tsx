import React, { FC } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Error: FC = () => {
  toast('Hello world')

  return <ToastContainer autoClose={3000} />
}

export default Error
