import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { authData } from '../App'

const Home = () => {

  return (
    <>
      <Header />
      <h1 className='text-center mt-5 home'> Welcome to the home page!</h1>
      <h2 className='text-center mt-3'> Hello - </h2>
    </>
  )
}

export default Home