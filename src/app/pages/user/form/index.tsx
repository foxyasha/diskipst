import {ILoginPort, IRegisterPort} from "../../../../domain/user/interface/port";
import {useForm} from "react-hook-form";
import {UseMutateAsyncFunction} from "@tanstack/react-query";
import {ILoginDto} from "../../../../domain/user/interface/dto";
import {ReactNode} from "react";

interface IAuthPageProps {
    mutateAsync: UseMutateAsyncFunction<ILoginDto, Error, ILoginPort | IRegisterPort, unknown>
    title: string
    button: ReactNode
    actionButton: string
}

const AuthForm = ({mutateAsync, title, button, actionButton}: IAuthPageProps) => {

    const methods = useForm<ILoginPort>()

    const handleSubmit = methods.handleSubmit(async (data) => {
        await mutateAsync(data)
    })


    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            {title}
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <input
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Логин"
                                    type="text" {...methods.register('login')}
                                />
                            </div>
                            <div>
                                <input
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Пароль"
                                    type="password" {...methods.register('password')}
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{actionButton}
                            </button>
                            {button}
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AuthForm;