'use client'
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BiBookBookmark, BiHomeAlt } from "react-icons/bi"

export const LinkItems = () => {
    const pathname = usePathname()

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Link href="/" className={clsx(
                'flex flex-col items-center justify-center m-3 w-full',
                {
                    'bg-mp-soft-dark': pathname === "/"
                }
            )}>
                <BiHomeAlt color="white" size={25} />
                <p className="text-mp-white text-sm">Movimientos</p>
            </Link>
            <Link href="/credit-sales" className={clsx(
                'flex flex-col items-center justify-center m-3 w-full',
                {
                    'bg-mp-soft-dark': pathname === "/credit-sale"
                }
            )}>
                <BiBookBookmark color="white" size={25} />
                <p className="text-mp-white text-sm" >Apartados</p>
            </Link>
        </div>
    )
}