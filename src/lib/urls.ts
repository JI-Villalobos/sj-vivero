import { env } from "../config/env"
 
export const urls = {
    auth: {
        authenticate: `${env.API_URL}/auth/authenticate`
    },
    accounts: {
        accounts: `${env.API_URL}/accounts`,
        getLatest: (branchId: number) => `${env.API_URL}/accounts/${branchId}`,
        getById: (accountingId: number) => `${env.API_URL}/accounts/account/${accountingId}`
    },
    active_accounts: {
        post: `${env.API_URL}/active-accounting`,
        getCurrent: (branchId: number) => `${env.API_URL}/active-accounting/branch/${branchId}`,
        patch: (accountingId: number) => `${env.API_URL}/active-accounting/${accountingId}`
    },
    sellers: {
        get: (branchId: number) => `${env.API_URL}/sellers/branch/${branchId}`,
        byId: (sellerId: number) => `${env.API_URL}/sellers/${sellerId}`,
    },
    creditSales: {
        getById: (creditSaleId: number) => `${env.API_URL}/credit-sale/get/${creditSaleId}`,
        getAll: (branchId: number) => `${env.API_URL}/credit-sale/get-all/${branchId}`,
        getByPaymentStatus: (branchId: number, isPaid: boolean) => `${env.API_URL}/credit-sale/get-by-status/${branchId}/${isPaid}`,
        mutate: `${env.API_URL}/credit-sale`,
        balance:(creditSaleId: number) => `${env.API_URL}/credit-sale/balance/${creditSaleId}`
    },
    partialPayments: {
        getById: (partialId: number) => `${env.API_URL}/partials/${partialId}`,
        mutate: `${env.API_URL}/partials`
    },
    expenses: {
        types: `${env.API_URL}/expenses-types`,
        mutate: `${env.API_URL}/expenses`
    },
    withdrawals: {
        mutate: `${env.API_URL}/withdrawals`
    },
    branch: {
        getById: (branchId: number) => `${env.API_URL}/branches/${branchId}`,
        getTotalBalance: (branchId: number) => `${env.API_URL}/branches/balance/${branchId}`,
        getConfig: (branchId: number) => `${env.API_URL}/branch-configuration/get/${branchId}`,
        updateConfig: (branchConfigId: number) => `${env.API_URL}/branch-configuration/${branchConfigId}`
    },
    incomes: {
        mutate: `${env.API_URL}/incomes`,
    }
}