import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { authData } from '../App'

const Home = () => {

  const { logedUser, setLogedUser } = useContext(authData)
  const { login, setLogin } = useContext(authData)

  return (
    <>
      {/* <Header /> */}
      <h1 className='text-center mt-5 home'> Welcome to the home page!</h1>
      {/* <h2 className='text-center mt-3'> Hello, {logedUser}</h2> */}
      {
        login ?
          <h2 className='text-center mt-3'> login Successfully !</h2>
          : ""
      }
    </>
  )
}

export default Home