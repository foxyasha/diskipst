import {IChildrenFile} from "../../../../../domain/file/interface/dto";
import {useDeleteFileLogic} from "../../../../../domain/file/logic/delete";
import {openInNewTab} from "../../../../tools/openInNewTab";

interface IFileCardProps {
    file: IChildrenFile
    id: string
}

const FileCard = ({file, id}: IFileCardProps) => {

    const {mutateAsync} = useDeleteFileLogic()

    const handleFileDelete = () => {
        void mutateAsync({id})
    }


    return (
        <div>
            <div className="mt-2 space-y-2">
                <span>{file.name}</span>
                <svg onClick={() => openInNewTab(file.filepath)} className="cursor-pointer"
                     xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="50" height="50" viewBox="0 0 50 50">
                    <path
                        d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z"></path>
                </svg>
                <button
                    onClick={handleFileDelete}
                    className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                >
                    Удалить
                </button>

            </div>

        </div>
    );
};

export default FileCard;