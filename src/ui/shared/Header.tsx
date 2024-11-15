import Image from "next/image"
import Link from "next/link"
import { BiSolidSend } from "react-icons/bi"

export const Header = () => {
    return (
        <div className="w-full">
            <header className="flex flex-row justify-between items-center w-full bg-mp-gray-soft">
                <Image src="/images/sj-vivero.png" width={120} height={120} alt="Company logo" className="p-4"/>
                <p className="text-sm text-mp-dark">Version: 0.1.1</p>
                <Link href="/login" className="p-4">
                    <BiSolidSend size={20}/>
                </Link>
            </header>
        </div>
    )
}