import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const Auth = (Component) => {
    const navigate = useNavigate()

    useEffect(() => {
        const cookie = Cookies.get('email')

        if(!cookie){
            navigate('/signin')
        }
    }, [navigate])
}

export default Auth