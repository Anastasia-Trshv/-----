import { Link } from "react-router-dom";
import { RegistrForm } from "../components/RegistrationForm";

export function Registrating (){
    return(
        <><h1 className="text-center display-5">Регистрация</h1>
        <RegistrForm></RegistrForm>
        <p className="text-center">Уже есть аккаунт? <Link to="/log_in">Войдите.</Link></p>
        </>
    )
}