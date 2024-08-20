import { ExpenseRegistry } from "@/src/lib/definitions"
import { formatAmount, summarize } from "@/src/lib/utils"

interface Props {
    expenses: ExpenseRegistry[]
}

export const ExpenseSummary = ({ expenses }: Props) => {

    if (expenses.length < 1) {
        return <></>
    }

    return (
        <div className="flow-root mt-6 w-2/4 shadow-md">
            <p className="text-center text-2xl font-bold text-mp-blue sm:text-xl mt-2">Resumen de Gastos</p>
            <dl className="-my-3 divide-y divide-mp-strong-gray text-sm p-4">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-mp-strong-gray">Gastos</dt>
                    <dd className="text-gray-mp sm:col-span-2"></dd>
                </div>

                {
                    expenses.map((expense) => (
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4" key={`expense-key-id-${expense.id}`}>
                            <dt className="font-medium text-mp-green">{expense.description}</dt>
                            <dd className="text-mp-dark sm:col-span-2">{formatAmount(expense.amount)}</dd>
                        </div>
                    ))
                }
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-mp-green">TOTAL</dt>
                    <dd className="text-mp-green font-semibold sm:col-span-2">{formatAmount(summarize(expenses))}</dd>
                </div>
            </dl>
        </div>
    )
}