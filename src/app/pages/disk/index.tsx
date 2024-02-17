import {useGetFolderLogic} from "../../../domain/folder/logic/get";
import FolderCard from "./components/folder-card";
import {useCreateFolderLogic} from "../../../domain/folder/logic/create";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";


const DiskPage = () => {
    const {id} = useParams() as { id: string }
    const navigate = useNavigate()

    const {data, status} = useGetFolderLogic({id: id ?? 'root'})
    useEffect(() => {
        if (status === "error") {
            navigate('/disk')
        }
    }, [status])

    const {mutateAsync} = useCreateFolderLogic()

    const handleCreateFolder = () => {
        void mutateAsync({name: crypto.randomUUID(), parentId: id ?? 'root'})

    }


    return (
        <div>
            <button onClick={handleCreateFolder}>Создать папку</button>
            <input/>
            <div className="grid grid-cols-12 gap-3">
                {data?.children.map((item) => (
                    <FolderCard id={item.id}/>
                ))}

            </div>
        </div>

    );
};

export default DiskPage;