interface IUploadFileDto {
    id: string
    file: IChildrenFile
}

interface IChildrenFile {
    name: string,
    filepath: string
}


export type {IUploadFileDto, IChildrenFile}

