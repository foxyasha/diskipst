import API_HTTPS_SERVICES from "../settings.ts";
import {ILoginPort, IRegisterPort} from "../../domain/user/interface/port";
import {ILoginDto, IRegDto} from "../../domain/user/interface/dto";

const AuthRequest = (port: ILoginPort): Promise<ILoginDto> => {
    return API_HTTPS_SERVICES.post("/auth/login", port).then(res => res.data)
}
const RegRequest = (port: IRegisterPort): Promise<IRegDto> => {
    return API_HTTPS_SERVICES.post("/auth/register", port).then(res => res.data)
}

export {AuthRequest, RegRequest}