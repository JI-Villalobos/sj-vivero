import { cookies } from "next/headers"
import { AccessToken } from "../../../api/auth/route"
import { CreditSale } from "@/src/lib/definitions"
import { getCreditSale } from "@/src/lib/credit-sales"
import { formatAmount, formatDate } from "@/src/lib/utils"
import Link from "next/link"

export default async function SaleDetail({ params }: { params: { id: string } }) {

    const id: number = parseInt(params.id)
    console.log(id);

    const cookieStore = cookies()
    const userProfile = cookieStore.get('user-profile')

    const profile: AccessToken = JSON.parse(userProfile?.value!)

    const sale: CreditSale = await getCreditSale(id, profile.token)

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-1/2 m-8 flow-root rounded-lg border border-mp-gray-soft py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-mp-gray-soft text-sm">
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4 bg-mp-gray-soft">
                        <dt className="font-medium text-mp-soft-dark">Número de apartado</dt>
                        <dd className="text-mp-soft-dark sm:col-span-2">{sale.id}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 text-mp-soft-dark">Cliente</dt>
                        <dd className="text-mp-green sm:col-span-2">{sale.client}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-mp-soft-dark">Concepto</dt>
                        <dd className="text-mp-dark sm:col-span-2">{sale.concept}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-mp-soft-dark">Precio Acordado</dt>
                        <dd className="text-mp-blue sm:col-span-2">{formatAmount(sale.amount)}</dd>
                    </div>



                </dl>
            </div>
            <div className="flex flex-col w-full items-center justify-center m-6">
                {
                    sale.partials.length > 0 &&
                    <>
                        <p className="font-medium text-mp-soft-dark">Detalle de pagos</p>
                        <div className="w-1/2 m-8 flow-root rounded-lg border border-mp-gray-soft py-3 shadow-sm">
                            {
                                sale.partials.map(partial =>
                                    <dl className="-my-3 divide-y divide-mp-gray-soft text-sm" key={`part-id-${partial.id}`}>
                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="mr-3 text-mp-green">Abonado el {formatDate(partial.paymentDate)}</dt>
                                            <dd className="text-mp-blue sm:col-span-2"> Por {formatAmount(partial.amount)}</dd>
                                        </div>
                                    </dl>

                                )
                            }
                        </div>
                    </>
                }
            </div>
            <div>
                <Link href="/credit-sales"
                    className="bg-mp-blue p-2 rounded text-mp-white"
                >
                    Regresar
                </Link>

            </div>
        </div>
    )
}