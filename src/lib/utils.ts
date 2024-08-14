export const getCurrentDate = () => {
    const date = new Date()
    const fixed = date.getTimezoneOffset() * 60000;
    const now = new Date(Date.now() - fixed)

    return now.toISOString()
}

export const formatDate = (timestamp: string) => {
    const date: Date = new Date(timestamp)
    const year: string = date.getFullYear().toString()
    const month: string = String(date.getMonth() + 1).padStart(2, '0')
    const day: string = String(date.getDate()).padStart(2, '0')

    return `${day}-${month}-${year}`
}

export const formatAmount = (amount: number): string => {
    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    })

    return formatter.format(amount)
}