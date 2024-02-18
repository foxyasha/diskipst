import {useLoginLogic} from "../../../../domain/user/logic/auth";
import {useNavigate} from "react-router-dom";
import AuthForm from "../form";


const AuthPage = () => {
    const {mutateAsync} = useLoginLogic()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/reg')
    }

    return (
        <AuthForm mutateAsync={mutateAsync} title="Авторизация"
                  button={<button onClick={handleClick}>Нет
                      аккаунта? Создать</button>} actionButton="Авторизоваться"/>

    )
};

export default AuthPage;