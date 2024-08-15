import axios from "axios"
import { urls } from "./urls"

const options = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export const getExpenseTypes = async (token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.get(urls.expenses.types, options)
  
    return data
}
  