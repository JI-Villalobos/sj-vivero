import { AccountNotRegistered } from "@/src/ui/user-home/AccountNotRegistered";
import Image from "next/image";

export default function NotAccount() {
    return (
        <main className="flex flex-col static">
            <div className="absolute self-center">
                <AccountNotRegistered />
            </div>
            <div className="w-full flex items-center justify-center">
                <Image src="/sj-bg.svg" alt="bg login" width={420} height={420} />
            </div>
        </main>
    )
}