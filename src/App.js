import './App.css';
import Signup from './Component/Signup';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import { createContext, useEffect, useState } from 'react';
import { browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence } from 'firebase/auth';
import { app, auth } from './firebase';
import Header from './Component/Header';

export const authData = createContext()

function App() {

  const [users, setUsers] = useState([])
  const [login, setLogin] = useState(false)
  const [logedUser, setLogedUser] = useState(null)

  useEffect(() => {
    const auth = getAuth(app)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName);
        setLogin(true)
        setLogedUser(user.displayName)
      } else {
        setLogin(false);
        setLogedUser(null);
      }
    })
  }, [])

  return (
    <>
      {/* <Signup /> */}
      <BrowserRouter>
        <authData.Provider value={{ users, setUsers, login, setLogin, logedUser, setLogedUser }}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </authData.Provider>

      </BrowserRouter>
    </>
  );
}

export default App;
