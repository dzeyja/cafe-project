import React, { FC } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { setAddUser } from '../../../store/slices/userSlice/userSlice'
import { useNavigate } from 'react-router-dom'
import FormAuth from '../FormAuth/FormAuth'
import { ROUTES } from '../../../utils/routes'

const SignUp: FC = () => {
  const dispacth = useAppDispatch()
  const navigate = useNavigate()

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth()
    console.log(auth)
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispacth(
          setAddUser({
            email: user.email,
            id: user.uid,
          })
        )
        navigate('/')
      })
      .catch((err) => console.log(err.message))
  }

  return <FormAuth title="login" handleClick={handleRegister} />
}

export default SignUp
