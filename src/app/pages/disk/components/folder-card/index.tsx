import {useNavigate} from "react-router-dom";
import {replaceArgs} from "../../../../tools/replaceargs";
import {useEffect, useState} from "react";
import Modal from "../../../../components/modal";
import {useEditFolderLogic} from "../../../../../domain/folder/logic/edit";
import {useDeleteFolderLogic} from "../../../../../domain/folder/logic/delete";


interface IFolderCardProps {
    id: string
    name: string
}


const FolderCard = ({id, name}: IFolderCardProps) => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [folderName, setFolderName] = useState('')

    const {mutateAsync: deleteMutateAsync} = useDeleteFolderLogic()
    const {mutateAsync: editMutateAsync} = useEditFolderLogic()


    const handleFolderDelete = () => {
        void deleteMutateAsync({id})
    }

    const handleIntoFolder = () => {
        navigate(
            replaceArgs('/disk/:id', {':id': id})
        )
    }

    const handleEditFolder = () => {
        void editMutateAsync({id, name: folderName})

    }


    useEffect(() => {

    }, [window]);


    return (
        <div>
            <div className="mt-2 space-y-2">
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Редактировать папку"
                >
                    <div>
                        <input
                            type="text"
                            value={folderName}
                            onChange={(e) => setFolderName(e.target.value)}
                            placeholder="Название папки"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />

                        <button
                            className="mt-3 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                            onClick={handleEditFolder}>
                            Редактировать
                        </button>

                    </div>
                </Modal>

                <div className="flex items-center ">
                    <p className="truncate">
                        {name}
                    </p>

                    <svg onClick={() => setIsModalOpen(true)} className="ml-0.5 cursor-pointer" height="13" width="16"
                         viewBox="0 0 256.000000 256.000000"
                         xmlns="http://www.w3.org/2000/svg">
                        <g fill="#000000" stroke="none"
                           transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)">
                            <path
                                d="M2016 2465 c-22 -8 -53 -24 -70 -36 -35 -25 -175 -171 -345 -359 -320 -352 -690 -719 -1088 -1078 l-190 -170 -41 -105 c-66 -169 -203 -587 -200 -610 2 -13 11 -23 24 -25 21 -3 316 96 559 188 162 62 138 42 400 335 319 356 648 680 1090 1071 283 252 325 307 325 428 -1 68 -31 115 -156 237 -91 89 -128 119 -159 128 -53 14 -101 13 -149 -4z m117 -159 c46 -19 173 -154 181 -193 4 -17 2 -50 -4 -72 -12 -47 -56 -90 -420 -422 -390 -355 -503 -467 -1021 -1009 l-187 -195 -78 -29 c-44 -16 -84 -31 -91 -33 -6 -3 -14 6 -18 18 -11 32 -81 105 -116 119 -36 15 -35 23 12 135 28 67 38 79 251 280 351 332 706 689 954 960 331 362 392 423 439 440 51 18 59 18 98 1z"/>
                        </g>
                    </svg>
                </div>


                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48"
                     className="cursor-pointer" onClick={handleIntoFolder}>
                    <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path>
                    <path fill="#FFCA28"
                          d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
                </svg>
                <button
                    onClick={handleFolderDelete}
                    className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                >
                    Удалить
                </button>

            </div>

        </div>
    );
};

export default FolderCard;