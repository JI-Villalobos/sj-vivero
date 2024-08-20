import axios from "axios"
import { urls } from "./urls"

const options = {
    headers: {
        'Content-Type': 'application/json',
    }
}


export const getBranchById = async (branchId: number, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`
    const { data } = await axios.get(urls.branch.getById(branchId), options)

    return data
}


export const getTotalBalance = async (branchId: number, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`
    const { data } = await axios.get(urls.branch.getTotalBalance(branchId), options)

    return data
}