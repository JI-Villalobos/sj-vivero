export type RequestStatus = {
    isPending: boolean
    error: boolean
}

export const initialStatus: RequestStatus = {
    isPending: false,
    error: false
}

export const pendingRequest: RequestStatus = {
    isPending: true,
    error: false
}

export const failedRequest: RequestStatus = {
    isPending: false,
    error: true
}

export interface Accounting {
    id: number,
    sellerId: number,
    branchId: number,
    date: string,
    expenseRegistries: ExpenseRegistry[],
    incomeRegistries: IncomeRegistry[]
}

export type CreateAccounting = Pick<Accounting, 'sellerId' | 'branchId' | 'date'>
export type CustomAccounting = Omit<Accounting, 'expenseRegistries' | 'incomeRegistries' | 'id'>

export interface ExpenseRegistry {
    id: number,
    accountingId: number,
    expenseTypeId: number,
    description: string,
    time?: string,
    amount: number
}
  
export type CreateExpenseRegistry = Omit<ExpenseRegistry, 'id' | 'time'>

export interface IncomeRegistry {
    id: number,
    accountingId: number,
    incomeTypeId: number,
    tag: string,
    time?: string,
    amount: number
}
  
export type CreateIncomeRegistry = Omit<IncomeRegistry, 'id' | 'time'>

export interface Seller {
    id: number,
    fullName: string,
    branchId: number,
    isActive: boolean
}