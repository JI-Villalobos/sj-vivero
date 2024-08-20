import { IncomeRegistry } from "@/src/lib/definitions";
import { formatAmount, summarize } from "@/src/lib/utils";
import { BiMoney } from "react-icons/bi";

interface Props {
    incomes: IncomeRegistry[]
}

export const IncomeSummary = ({ incomes }: Props) => {
    return (
        <div className="flex flex-col justify-center items-center space-x-5 w-1/4 shadow-xl">
            <BiMoney size={30} className="self-start ml-16 text-mp-green"/>
            <div className="mb-1">
                <p className="text-mp-green text-xl">Ventas</p>
                <h2 className="text-4xl font-bold text-mp-dark">{formatAmount(summarize(incomes))}</h2>
            </div>
        </div>
    )
}