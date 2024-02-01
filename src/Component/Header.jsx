import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authData } from '../App'
import Swal from 'sweetalert2'
import { getAuth, signOut } from 'firebase/auth'
import { app } from '../firebase'
// import { auth } from '../firebase'
// import { getAuth, onAuthStateChanged } from 'firebase/auth'

const Header = () => {

    const auth = getAuth(app)
    const { login, setLogin } = useContext(authData)
    // console.log(login);
    const { logedUser, setLogedUser } = useContext(authData)
    const navigate = useNavigate()

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setLogin(false)
                setLogedUser(null)
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <section className='mt-3 gr-text'>
                <div className="container">
                    <header className='bg-dark p-3 bor-rad shadow'>
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className='d-flex justify-content-between align-items-center gap-3 mb-0'>
                                <Link to={"/"} className='fs-5'>Home</Link>
                            </ul>
                            <ul className='text-end d-flex justify-content-end align-items-center mb-0 gap-2'>
                                {
                                    !login ? <>
                                        <Link to={"/signup"} className='btn btn-light text-dark'>SignUp</Link>
                                        <Link to={"/login"} className='btn btn-light text-dark'>Login</Link>
                                    </>
                                        :
                                        <li className='btn btn-light text-dark' onClick={handleLogOut}>LogOut</li>
                                }
                            </ul>
                        </div>
                    </header>
                </div>
            </section>
        </>
    )
}

export default Header