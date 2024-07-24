import { LoginForm } from "@/src/components/login/LoginForm";
import Image from "next/image";

export default function Login(){
    return(
        <div className="w-full flex flex-row">
            <div className="w-1/2 flex flex-col items-center mt-20">
                <Image src="/sj-vivero.png" alt="vivero logo" width={420} height={420}/>
                <p className="text-center text-md w-2/4 p-4 text-mp-green font-semibold">Inicia sesión con el correo proporcionado por tu administrador</p>
                <LoginForm />
            </div>
            <div className="w-1/2 h-svh bg-mp-white flex items-center justify-center">
                <Image src="/sj-bg.svg" alt="bg login" width={420} height={420}/>
            </div>
        </div>
    )
}