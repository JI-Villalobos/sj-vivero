import { CreditSaleItem } from "@/src/ui/credit-sales/CreditSaleItem";
import { cookies } from "next/headers";
import { AccessToken } from "../api/auth/route";
import { CreditSale } from "@/src/lib/definitions";
import { getCreditSaleByStatus, getCreditSales } from "@/src/lib/credit-sales";
import { redirect } from "next/navigation";
import { NewCreditSaleButton } from "@/src/ui/credit-sales/NewCreditSaleButton";

export default async function CreditSales() {

    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')
      
    const profile: AccessToken = JSON.parse(userProfile?.value!)

    const creditSales: CreditSale[] = await getCreditSaleByStatus(profile.branchId, false, profile.token).catch(() => redirect('/temp-error'))

    return(
        <main className="flex flex-col w-full justify-center">
            <div className="flex flex-row justify-center items-center m-6">
                <p className="text-mp-green text-xl m-2">Lista de apartados no liquidados</p>
                <NewCreditSaleButton />
            </div>
            <div className="flex flex-col justify-center items-center m-10">
                {
                    creditSales.map((sale) => <CreditSaleItem creditSale={sale} key={`cs-id-${sale.id}`}/>)
                }
            </div>
        </main>
    )
}