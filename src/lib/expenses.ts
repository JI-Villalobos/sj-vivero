import axios from "axios"
import { urls } from "./urls"
import { CreateExpenseRegistry } from "./definitions"

const options = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export const getExpenseTypes = async (token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`
    const { data } = await axios.get(urls.expenses.types, options)

    return data
}

export const createExpense = async (expenseDto: CreateExpenseRegistry, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.post(urls.expenses.mutate, expenseDto, options)

    return data
}
