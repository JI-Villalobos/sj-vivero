export const urls = {
    auth: {
        authenticate: 'http://localhost:8080/jiltsa/api/v1/auth/authenticate'
    },
    accounts: {
        accounts: 'http://localhost:8080/jiltsa/api/accounts/',
        getLatest: (branchId: number) => `http://localhost:8080/jiltsa/api/accounts/${branchId}`
    }
}