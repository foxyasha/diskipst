import {IId} from "../../../common/interface";
import {IChildrenFile as IChildrenFileDto} from "../../../file/interface/dto"

interface ICreateFolderDto {
    token: string
}

interface IChildrenFolder extends IBaseChildren {
    name: string

}


interface IChildrenFile extends IBaseChildren {
    file: IChildrenFileDto
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