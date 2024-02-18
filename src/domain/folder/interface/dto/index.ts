import {IId} from "../../../common/interface";

interface ICreateFolderDto {
    token: string
}

interface IChildrenFolder extends IBaseChildren {
    name: string

}


interface IChildrenFile extends IBaseChildren {
    file: unknown
}

type IChildren = IChildrenFile | IChildrenFolder

interface IGetFolderDto extends IId {
    name: string,
    children: IChildren[]
}

interface IBaseChildren extends IId {
    type: string,
}


export type {ICreateFolderDto, IGetFolderDto, IChildrenFolder}