import axios from "axios";
import { CreateAccounting, CreateActiveAccounting } from "./definitions"
import { urls } from "./urls";

const options = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export const createActiveAccount = async (activeAccount: CreateActiveAccounting, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const response = await axios.post(urls.active_accounts.post, activeAccount, options)

    return response
}


export const getCurrentAccounting = async (branchId: number, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const response = await axios.get(urls.active_accounts.getCurrent(branchId), options)

    return response.data
}

export const closeCurrentAccounting = async (accountingId: number, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const response = await axios.patch(urls.active_accounts.patch(accountingId), options)

    return response
}