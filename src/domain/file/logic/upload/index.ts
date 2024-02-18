import {useMutation, useQueryClient} from "@tanstack/react-query";
import ERefetchQuery from "../../../common/enum/refetch.ts";
import {UploadFileRequest} from "../../../../data/file";

const useUploadFileLogic = () => {
    const refetchClient = useQueryClient();
    return useMutation({
        mutationFn: UploadFileRequest,
        onSuccess: () => {
            void refetchClient.invalidateQueries({queryKey: [ERefetchQuery.folder]})
        }
    })
}

export {useUploadFileLogic}