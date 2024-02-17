import {useMutation, useQueryClient} from "@tanstack/react-query";
import {DeleteFolderRequest} from "../../../../data/folder";
import ERefetchQuery from "../../../common/enum/refetch.ts";

const useDeleteFolderLogic = () => {
    const refetchClient = useQueryClient();
    return useMutation({
        mutationFn: DeleteFolderRequest,
        onSuccess: () => {
            void refetchClient.invalidateQueries({queryKey: [ERefetchQuery.folder]})
        }
    })
}

export {useDeleteFolderLogic}