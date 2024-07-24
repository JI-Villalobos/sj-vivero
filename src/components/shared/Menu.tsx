import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";

export const Menu = () => {
    return(
        <div className="flex flex-col bg-mp-dark w-36 h-svh">
            <Link href="/" className="flex flex-col items-center justify-center m-3">
                <BiHomeAlt color="white" size={25}/>
                <p className="text-mp-white text-sm">Movimientos</p>
            </Link>
            <Link href="/credit-sales" className="flex flex-col items-center justify-center m-3">
                <BiBookBookmark color="white" size={25} />
                <p className="text-mp-white text-sm" >Apartados</p>
            </Link>
        </div>
    )
}