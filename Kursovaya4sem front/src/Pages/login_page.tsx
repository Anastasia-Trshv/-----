
import { Link } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";





export function Login (){



    return(
        <>
        <><h1 className="text-center display-5">Вход</h1></>
        <LoginForm></LoginForm>
        <p className="text-center">Еще нет аккаунта? <Link to="/registration">Зарегистрируйтесь</Link></p>
        
        </>
    )
}