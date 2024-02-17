import {useDeleteFolderLogic} from "../../../../../domain/folder/logic/delete";
import {useNavigate} from "react-router-dom";
import {replaceArgs} from "../../../../tools/replaceargs";
import {useEffect} from "react";

interface IFolderCardProps {
    id: string
}

const FolderCard = ({id}: IFolderCardProps) => {
    const navigate = useNavigate()

    const {mutateAsync} = useDeleteFolderLogic()

    const handleFolderDelete = () => {
        void mutateAsync({id})

    }

    const handleIntoFolder = () => {
        navigate(
            replaceArgs('/disk/:id', {':id': id})
        )
    }

    useEffect(() => {

        console.log(window)
        
    }, [window]);


    return (
        <div>
            <div className="ring w-auto h-10 border-4 border-black text-blue-800 relative">
                <p className="absolute top-0 right-0 cursor-pointer" onClick={handleFolderDelete}>X</p>
                <p className="cursor-pointer" onClick={handleIntoFolder}>w</p>
            </div>
        </div>
    );
};

export default FolderCard;