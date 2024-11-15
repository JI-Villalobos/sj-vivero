import axios from "axios"
import { urls } from "./urls"

const options = {
  headers: {
    'Content-Type': 'application/json',
  }
}

export const getSellerByBranch = async (branchId: number, token: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`
  const response = await axios.get(urls.sellers.get(branchId), options)

  return response.data
}

export const getSeller = async (sellerId: number, token: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`
  const response = await axios.get(urls.sellers.byId(sellerId), options)

  return response.data
}