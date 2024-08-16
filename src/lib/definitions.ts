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

export interface ActiveAccounting {
    id: number,
    accountingId: number,
    isActive: boolean,
    branchId: number,
    sellerId: number
}

export type CreateActiveAccounting = Omit<ActiveAccounting, 'id'>

export interface CreditSale {
    id: number
    concept: string
    client: string
    date: string
    amount: number
    branchId: number
    isPaid: boolean
    partials: Partial[]
}

export interface Partial {
    id: number
    creditSaleId: number
    paymentDate: string
    amount: number
}

export type CreateCreditSale = Omit<CreditSale, 'id' | 'isPaid' | 'partials'>
export type UpdateCreditSale = Omit<CreditSale, 'partials'>
export type CreatePartial = Omit<Partial, 'id'>

export interface ExpenseType {
    id: number,
    type: string
}

export interface IncomeType {
    id: number,
    type: string
}

export interface CashWithdrawal {
    id: number,
    date: string,
    amount: number,
    concept: string,
    sellerName: string,
    branch: string
}

export type CreateCashWithdrawal = Omit<CashWithdrawal, | 'id' | 'date'>


export interface Branch {
    id: number,
    name: string,
    isActive: boolean
}