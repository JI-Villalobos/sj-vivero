import axios from "axios"
import { CreateIncomeRegistry } from "./definitions"
import { urls } from "./urls"

const options = {
    headers: {
        'Content-Type': 'application/json',
    }
}


export const createIncome = async (income: CreateIncomeRegistry, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`
    const { data } = await axios.post(urls.incomes.mutate, income, options)

    return data
}
