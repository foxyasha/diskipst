import {IId} from "../../../common/interface";

interface ICreateFolderDto {
    token: string
}

type IChildren = IChildrenFolder | IChildrenFile

interface IGetFolderDto extends IId {
    name: string,
    children: IChildren[]
}

interface IBaseChildren extends IId {
    type: string,
}

interface IChildrenFolder extends IBaseChildren {
    name: string
}

interface IChildrenFile extends IBaseChildren {
    file: unknown
}


export type {ICreateFolderDto, IGetFolderDto}