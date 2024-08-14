import axios from "axios";
import { urls } from "./urls";
import { CreateAccounting } from "./definitions";

const options = {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  
export const getLatestRegistries = async (branchId: number, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const response = await axios.get(urls.accounts.getLatest(branchId), options)
    
    return response.data
}
  
export const newAccounting = async (accounting: CreateAccounting, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const response = await axios.post(urls.accounts.accounts, accounting, options)
  
    return response
}
  /*export const getByDate = async (initial: string, end: string, branchId: number): Promise<Accounting[]> => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data }: AxiosResponse<Accounting[]> = await axios.get(endPoints.accountings.getByDate(initial, end, branchId), options)
  
    return data
  }*/
  
  export const getAccounting = async (accountingId: number, token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.get(urls.accounts.getById(accountingId), options)
  
    return data
  }
  
 /* export const newAccounting = async (accounting: CreateAccounting): Promise<Accounting> => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data }: AxiosResponse<Accounting> = await axios.post(endPoints.accountings.createAccounting, accounting, options) 
  
    return data
  }
  
  export const newCustomAccounting =  async (accounting: CustomAccounting): Promise<Accounting> => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data }: AxiosResponse<Accounting> = await axios.post(endPoints.accountings.createOutOfDateAccounting, accounting, options)
  
    return data
  }*/