import {IId} from "../../../common/interface";

interface IUploadFilePort {
    folderId: string,
    file: File
}

type IDeleteFilePort = IId


export type {IUploadFilePort, IDeleteFilePort}

