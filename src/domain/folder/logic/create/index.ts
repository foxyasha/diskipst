import {useMutation, useQueryClient} from "@tanstack/react-query";
import {CreateFolderRequest} from "../../../../data/folder";
import ERefetchQuery from "../../../common/enum/refetch.ts";

const useCreateFolderLogic = () => {
    const refetchClient = useQueryClient();
    return useMutation({
        mutationFn: CreateFolderRequest,
        onSuccess: () => {
            void refetchClient.invalidateQueries({queryKey: [ERefetchQuery.folder]})
        }
    })
}

export {useCreateFolderLogic}