import React, {FC, useEffect, useState} from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({isOpen, onClose, title, children}) => {

    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setIsModalOpen(false);
        onClose();
    };

    if (!isModalOpen) return null;


    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={handleClose}></div>
            <div className="bg-white p-6 rounded-md z-10">
                <h2 className="text-lg font-medium mb-4">{title}</h2>
                <div>{children}</div>
                <div className="flex justify-end mt-4">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded"
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;