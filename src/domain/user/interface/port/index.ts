interface ILoginPort {
    login: string
    password: string
}

type IRegisterPort = ILoginPort


export type {ILoginPort, IRegisterPort}
