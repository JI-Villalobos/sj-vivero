import axios from "axios";
import { CreateCashWithdrawal } from "./definitions";
import { urls } from "./urls";

const options = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export const createCashRegistry = async (cashRegistry: CreateCashWithdrawal, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.post(urls.withdrawals.mutate, cashRegistry, options)

    return data
}