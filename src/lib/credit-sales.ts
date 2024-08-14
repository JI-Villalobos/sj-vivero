import axios from "axios"
import { CreateCreditSale, CreatePartial, UpdateCreditSale } from "./definitions"
import { urls } from "./urls";

const options = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export const getCreditSales = async (branchId: number, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.get(urls.creditSales.getAll(branchId), options)

    return data
}

export const getCreditSale = async (creditSaleId: number, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.get(urls.creditSales.getById(creditSaleId), options)

    return data;
}

export const getCreditSaleByStatus = async (branchId: number, isPaid: boolean, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.get(urls.creditSales.getByPaymentStatus(branchId, isPaid), options)

    return data
}

export const createCreditSale = async (creditSale: CreateCreditSale, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.post(urls.creditSales.mutate, creditSale, options)

    return data
}

export const updateCreditSale = async (creditSale: UpdateCreditSale, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.put(urls.creditSales.mutate, creditSale, options)

    return data
}

export const getPartial = async (partialId: number, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.get(urls.partialPayments.getById(partialId), options)

    return data
}

export const createPartial = async (partial: CreatePartial, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.post(urls.partialPayments.mutate, partial, options)

    return data
}