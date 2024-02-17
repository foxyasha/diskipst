import {ILoginPort, IRegisterPort} from "../../../../domain/user/interface/port";
import {useForm} from "react-hook-form";
import {UseMutateAsyncFunction} from "@tanstack/react-query";
import {ILoginDto} from "../../../../domain/user/interface/dto";

interface IAuthPageProps {
    mutateAsync: UseMutateAsyncFunction<ILoginDto, Error, ILoginPort | IRegisterPort, unknown>
    title: string
    button: JSX.Element
}

const AuthForm = ({mutateAsync, title, button}: IAuthPageProps) => {

    const methods = useForm<ILoginPort>()

    const handleSubmit = methods.handleSubmit(async (data) => {
        await mutateAsync(data)
    })


    return (
        <div>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" {...methods.register('login')}/>
                <input type="text" {...methods.register('password')}/>
                <button type="submit">asd</button>
            </form>
            {button}
        </div>
    );
};

export default AuthForm;