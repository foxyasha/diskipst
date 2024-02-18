import {useGetFolderLogic} from "../../../domain/folder/logic/get";
import {useCreateFolderLogic} from "../../../domain/folder/logic/create";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import ECookieValues from "../../../domain/common/enum";
import FolderCard from "./components/folder-card";
import Modal from "../../components/modal";

const DiskPage = () => {
    const {id} = useParams() as { id: string }
    const navigate = useNavigate()
    const [folderName, setFolderName] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {data, status} = useGetFolderLogic({id: id ?? 'root'})
    useEffect(() => {
        if (status === "error") {
            navigate('/disk')
        }
    }, [status])

    const {mutateAsync} = useCreateFolderLogic()

    const handleCreateFolder = () => {
        void mutateAsync({name: folderName, parentId: id ?? 'root'})

    }

    const handleLogout = () => {
        Cookies.remove(ECookieValues.ACCESS_TOKEN)
        navigate('/')
    }

    const handleBackToPrevFolder = () => {
        navigate(-1)
    }


    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Облачное хранилище</h1>
                            <button
                                onClick={handleLogout}
                                className="absolute mt-6 top-0 right-3 px-1 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-2 focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                            >
                                Выйти
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                            >
                                Создать папку
                            </button>
                            <Modal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                title="Создать папку"
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
                                        onClick={handleCreateFolder}>
                                        Добавить
                                    </button>

                                </div>
                            </Modal>
                            <div>
                                <span className="cursor-pointer " hidden={!id}
                                      onClick={handleBackToPrevFolder}>🠔Назад</span>
                                <div className="grid grid-cols-4 gap-2">
                                    {data?.children.map((item) => (
                                        <FolderCard id={item.id} name={"name" in item ? item.name : ''}/>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default DiskPage;