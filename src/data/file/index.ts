import API_HTTPS_SERVICES from "../settings.ts";
import {IDeleteFilePort, IUploadFilePort} from "../../domain/file/interface/port";
import {IUploadFileDto} from "../../domain/file/interface/dto";


const UploadFileRequest = (port: IUploadFilePort): Promise<IUploadFileDto> => {
    const formData = new FormData();
    formData.append('file', port.file);
    formData.append('folderId', port.folderId);

    return API_HTTPS_SERVICES.post("/drive/files", formData).then(res => res.data)
}

const DeleteFileRequest = (port: IDeleteFilePort): Promise<unknown> => {
    return API_HTTPS_SERVICES.delete(`/drive/files/${port.id}`).then(res => res.data)
}

export {UploadFileRequest, DeleteFileRequest}