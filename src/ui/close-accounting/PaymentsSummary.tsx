import { Partial } from "@/src/lib/definitions";
import { formatAmount } from "@/src/lib/utils";
import { cookies } from "next/headers";

export const PaymentsSummary = () => {
    const cookieStore = cookies()
    const data = cookieStore.get('partials')
    console.log(data);

    if (data) {
        const partials: Partial[] = JSON.parse(data.value)

        return (
            <div className="mt-6 w-2/4">
                <p className="text-center text-2xl font-bold text-mp-dark sm:text-xl m-2">Abono de apartados</p>
                {
                    partials.map((partial) =>
                        <div className="grid grid-cols-1 lg:grid-cols-3 p-1 m-2 shadow-lg text-sm" key={`payment-id-${partial.id}`}>
                            <div className="text-center text-mp-dark"><span className="text-mp-green">Apartado #: </span>{partial.creditSaleId}</div>
                            <div className="text-center text-mp-blue"><span className="text-mp-green">Fecha pago: </span>{partial.paymentDate}</div>

                            <div className="text-center text-mp-error"><span className="text-mp-green">Monto: </span>{formatAmount(partial.amount)}</div>
                        </div>
                    )
                }
            </div>
        )
    }


    if (!data) {
        return <></>
    }
}