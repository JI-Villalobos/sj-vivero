'use client'
import { BiSolidHot } from "react-icons/bi";

interface Props {
    title: string
    description: string
}

export const ErrorLabel = ({ title, description }: Props) => {
    return (
        <>
            <div
                className="font-regular relative block w-full rounded-lg bg-mp-error p-4 
                            text-base leading-5 text-mp-white opacity-100"
                data-dismissible="alert"
            >
                <div className="mr-12 text-center">{title}</div>
                <div
                    className="absolute top-2.5 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
                    data-dismissible-target="alert"
                >
                    <button
                        role="button"
                        className="w-max rounded-lg p-1"
                        data-alert-dimissible="true"
                    >
                        <BiSolidHot color="white" size={25}/>
                    </button>
                </div>
            </div>
            <div className="w-full pt-5 px-4 mb-8 mx-auto ">
                <div className="text-sm text-mp-soft-dark py-1 text-center">
                    {description}
                </div>
            </div>
        </>
    )
}