import { useState } from "react";
import Login from './LoginForm/Login'
import Register from './RegisterForm/Register'

const Auth = () => {
    const [currentPage, setCurrentPage] = useState('register')

    return (
        <div>
            {currentPage === 'login' ? <Login setCurrentPage={setCurrentPage} /> : <Register setCurrentPage={setCurrentPage} />}
        </div>
    )
}

export default Auth;