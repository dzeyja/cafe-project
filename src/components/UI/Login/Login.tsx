import React, { FC } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import FormAuth from '../FormAuth/FormAuth'
import { setAddUser } from '../../../store/slices/userSlice/userSlice'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setAddUser({
            email: user.email,
            id: user.uid,
          })
        )
        navigate('/')
      })
      .catch((err) => console.log(err.message))
  }

  return <FormAuth title="login" handleClick={handleLogin} />
}

export default Login
