export const urls = {
    auth: {
        authenticate: 'http://localhost:8080/jiltsa/api/v1/auth/authenticate'
    },
    accounts: {
        accounts: 'http://localhost:8080/jiltsa/api/v1/accounts',
        getLatest: (branchId: number) => `http://localhost:8080/jiltsa/api/v1/accounts/${branchId}`
    },
    active_accounts: {
        post: 'http://localhost:8080/jiltsa/api/v1/active-accounting',
        getCurrent: (branchId: number) =>  `http://localhost:8080/jiltsa/api/v1/active-accounting/branch/${branchId}` ,
        patch: (accountingId: number) => `http://localhost:8080/jiltsa/api/v1/active-accounting/${accountingId}`
    },
    sellers: {
        get: (branchId: number) => `http://localhost:8080/jiltsa/api/v1/sellers/branch/${branchId}`
    }
}