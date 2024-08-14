import { CreditSaleItem } from "@/src/ui/credit-sales/CreditSaleItem";

export default async function CreditSales() {
    return(
        <main className="flex flex-col w-full justify-center">
            <div className="flex flex-col justify-center items-center m-10">
                <CreditSaleItem />
                <CreditSaleItem />
                <CreditSaleItem />
                <CreditSaleItem />
                <CreditSaleItem />
                <CreditSaleItem />
                <CreditSaleItem />
            </div>
        </main>
    )
}