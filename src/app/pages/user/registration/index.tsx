import {useRegLogic} from "../../../../domain/user/logic/reg";
import AuthForm from "../form";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const {mutateAsync} = useRegLogic()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }


    return <AuthForm mutateAsync={mutateAsync} title="Регистрация"
                     button={<button onClick={handleClick}>Уже есть аккаунт? Войти</button>}
                     actionButton="Зарегистрироваться"/>
};

export default RegisterPage;