import { useState } from "react";
import Login from './LoginForm/Login'
import Register from './RegisterForm/Register'

const Auth = (props) => {
    const [currentPage, setCurrentPage] = useState('login')

    return (
        <div>
            {currentPage === 'login' ? <Login setUser={props.setUser} setIsAuth={props.setIsAuth} setCurrentPage={setCurrentPage} /> : <Register setCurrentPage={setCurrentPage} />}
        </div>
    )
}

export default Auth;