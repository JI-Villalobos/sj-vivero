import { BiLeaf } from "react-icons/bi"

export const AccountingInfo = () => {
    return (
        <div className="w-1/4 flex flex-row items-center justify-center m-8 rounded shadow-md bg-mp-gray-soft p-6">
            <div className="w-1/12">
                <BiLeaf color="green" size={30}/>
            </div>
            <div className="flex flex-col w-11/12 items-center justify-center">
                <div>
                    <p className="text-mp-green font-semibold">Corte correspondiente al <span className="text-mp-blue">27/08/2024</span></p>
                </div>
                <div className="flex flex-row">
                    <p className="text-mp-green font-semibold">Corte: </p>
                    <p className="text-mp-blue">145</p>
                </div>
            </div>
        </div>
    )
}