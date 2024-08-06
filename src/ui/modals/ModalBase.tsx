'use client'

import React from "react"
import ReactDOM from "react-dom"

interface Props {
    onClose: CallableFunction
    children: React.ReactNode
    title?: string 
}

const Modal = ({ children, onClose, title }: Props) => {
    const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        onClose();
    };


    const modalContent = (
        <div className="absolute top-0 left-0 w-full h-full flex 
                        justify-center items-center bg-mp-dark bg-opacity-35"
        >
            {/* Wrap the whole Modal inside the newly created StyledModalWrapper
            and use the ref */}
            <div className="w-1/3 opacity-">
                <div className="bg-mp-white rounded">
                    <div className="flex content-end text-sm">
                        <button 
                            onClick={handleCloseClick} 
                            className="bg-mp-green w-10 h-10 rounded text-mp-white text-xl 
                                        m-2 hover:bg-mp-light-green"
                        >
                            x
                        </button>
                    </div>
                    <div className="flex flex-col justify-center w-full">
                        {title && <h1 className="text-mp-dark text-center">{title}</h1>}
                    </div>
                    <div className="pt-3">{children}</div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")!
    )
}

export default Modal