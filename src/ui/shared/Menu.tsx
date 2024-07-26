import { BiLeaf } from "react-icons/bi";
import { LinkItems } from "./LinkItems";

export const Menu = () => {
    return(
        <div className="flex flex-col items-center bg-mp-dark w-36 h-svh">
            <BiLeaf color="white" size={65} className="mt-3"/>
            <LinkItems />
        </div>
    )
}
