import {useLoginLogic} from "../../../../domain/user/logic/auth";
import AuthForm from "../form";
import {useNavigate} from "react-router-dom";


const AuthPage = () => {
    const {mutateAsync} = useLoginLogic()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/reg')
    }

    return (
        <AuthForm mutateAsync={mutateAsync} title="Авторизация" button={<button onClick={handleClick}/>}/>
    )
};

export default AuthPage;