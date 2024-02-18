import {useMutation, useQueryClient} from "@tanstack/react-query";
import ERefetchQuery from "../../../common/enum/refetch.ts";
import {DeleteFileRequest} from "../../../../data/file";

const useDeleteFileLogic = () => {
    const refetchClient = useQueryClient();
    return useMutation({
        mutationFn: DeleteFileRequest,
        onSuccess: () => {
            void refetchClient.invalidateQueries({queryKey: [ERefetchQuery.folder]})
        }
    })
}

export {useDeleteFileLogic}