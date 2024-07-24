import Image from "next/image"

export const Header = () => {
    return (
        <div className="">
            <header>
                <Image src="/sj-vivero.png" width={80} height={80} alt="Company logo"/>
            </header>
        </div>
    )
}