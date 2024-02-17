import {useMutation, useQueryClient} from "@tanstack/react-query";
import {UpdateFolderRequest} from "../../../../data/folder";
import ERefetchQuery from "../../../common/enum/refetch.ts";

const useEditFolderLogic = () => {
    const refetchClient = useQueryClient();
    return useMutation({
        mutationFn: UpdateFolderRequest,
        onSuccess: () => {
            void refetchClient.invalidateQueries({queryKey: [ERefetchQuery.folder]})
        }
    })
}

export {useEditFolderLogic}