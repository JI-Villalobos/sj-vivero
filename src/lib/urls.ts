export const urls = {
    auth: {
        authenticate: 'http://localhost:8080/jiltsa/api/v1/auth/authenticate'
    },
    accounts: {
        accounts: 'http://localhost:8080/jiltsa/api/v1/accounts',
        getLatest: (branchId: number) => `http://localhost:8080/jiltsa/api/v1/accounts/${branchId}`,
        getById: (accountingId: number) => `http://localhost:8080/jiltsa/api/v1/accounts/account/${accountingId}`
    },
    active_accounts: {
        post: 'http://localhost:8080/jiltsa/api/v1/active-accounting',
        getCurrent: (branchId: number) => `http://localhost:8080/jiltsa/api/v1/active-accounting/branch/${branchId}`,
        patch: (accountingId: number) => `http://localhost:8080/jiltsa/api/v1/active-accounting/${accountingId}`
    },
    sellers: {
        get: (branchId: number) => `http://localhost:8080/jiltsa/api/v1/sellers/branch/${branchId}`
    },
    creditSales: {
        getById: (creditSaleId: number) => `http://localhost:8080/jiltsa/api/v1/credit-sale/get/${creditSaleId}`,
        getAll: (branchId: number) => `http://localhost:8080/jiltsa/api/v1/credit-sale/get-all/${branchId}`,
        getByPaymentStatus: (branchId: number, isPaid: boolean) => `http://localhost:8080/jiltsa/api/v1/credit-sale/get-by-status/${branchId}/${isPaid}`,
        mutate: `http://localhost:8080/jiltsa/api/v1/credit-sale`,
        balance:(creditSaleId: number) => `http://localhost:8080/jiltsa/api/v1/credit-sale/balance/${creditSaleId}`
    },
    partialPayments: {
        getById: (partialId: number) => `http://localhost:8080/jiltsa/api/v1/partials/${partialId}`,
        mutate: `http://localhost:8080/jiltsa/api/v1/partials`
    },
    expenses: {
        types: 'http://localhost:8080/jiltsa/api/v1/expenses-types',
        mutate: 'http://localhost:8080/jiltsa/api/v1/expenses'
    },
    withdrawals: {
        mutate: 'http://localhost:8080/jiltsa/api/v1/withdrawals'
    },
    branch: {
        getById: (branchId: number) => `http://localhost:8080/jiltsa/api/v1/branches/${branchId}`,
        getTotalBalance: (branchId: number) => `http://localhost:8080/jiltsa/api/v1/branches/balance/${branchId}`
    },
    incomes: {
        mutate: `http://localhost:8080/jiltsa/api/v1/incomes`,
    }
}