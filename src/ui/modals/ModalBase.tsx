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
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-mp-strong-gray">
            {/* Wrap the whole Modal inside the newly created StyledModalWrapper
            and use the ref */}
            <div className="w-svw h-svh">
                <div className="bg-mp-gray-soft">
                    <div className="flex content-end text-sm">
                        <button onClick={handleCloseClick}>
                            x
                        </button>
                    </div>
                    {title && <h1>{title}</h1>}
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