import {ICreateFolderPort, IDeleteFolderPort, IGetFolderPort} from "../../domain/folder/interface/port";
import API_HTTPS_SERVICES from "../settings.ts";
import {ICreateFolderDto, IGetFolderDto} from "../../domain/folder/interface/dto";

const CreateFolderRequest = (port: ICreateFolderPort): Promise<ICreateFolderDto> => {
    return API_HTTPS_SERVICES.post("/drive/folder", port).then(res => res.data)
}

const DeleteFolderRequest = (port: IDeleteFolderPort): Promise<unknown> => {
    return API_HTTPS_SERVICES.delete(`/drive/folder/${port.id}`).then(res => res.data)
}

const UpdateFolderRequest = ({id, ...port}: IGetFolderPort): Promise<unknown> => {
    return API_HTTPS_SERVICES.patch(`/drive/folder/${id}`, port)
}

const GetFolderWrapper = (port: IGetFolderPort) => {
    const GetFolderRequest = (): Promise<IGetFolderDto> => {
        return API_HTTPS_SERVICES.get(`/drive/folder/${port.id}`).then(res => res.data.data)
    }
    return {GetFolderRequest}
}

export {CreateFolderRequest, DeleteFolderRequest, UpdateFolderRequest, GetFolderWrapper}