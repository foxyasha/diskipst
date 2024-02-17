import {useQuery} from "@tanstack/react-query";
import {GetFolderWrapper} from "../../../../data/folder";
import ERefetchQuery from "../../../common/enum/refetch.ts";
import {IGetFolderPort} from "../../interface/port";


const useGetFolderLogic = (port: IGetFolderPort) => {
    const {GetFolderRequest} = GetFolderWrapper(port)
    return useQuery({queryFn: GetFolderRequest, queryKey: [ERefetchQuery.folder, port]})
}

export {useGetFolderLogic}