import {IId} from "../../../common/interface";

interface ICreateFolderPort {
    parentId: string,
    name: string
}

type IUpdateFolderPort = ICreateFolderPort & IId

type IGetFolderPort = IId

type IDeleteFolderPort = IId

export type {ICreateFolderPort, IDeleteFolderPort, IUpdateFolderPort, IGetFolderPort}