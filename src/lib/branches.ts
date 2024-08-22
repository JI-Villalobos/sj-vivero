import axios from "axios"
import { urls } from "./urls"
import { BranchConfig } from "./definitions"

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

export const updateBranchConfig = async (branchConfigId: number, BranchConfig: BranchConfig, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`
    const { data } = await axios.put(urls.branch.updateConfig(branchConfigId), BranchConfig, options)

    return data
}

export const getBranchConfig = async (branchId: number, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`
    const { data } = await axios.get(urls.branch.getConfig(branchId), options)

    return data
}
