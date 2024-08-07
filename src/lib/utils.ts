export const getCurrentDate = () => {
    const date = new Date()
    const fixed = date.getTimezoneOffset() * 60000;
    const now = new Date(Date.now() - fixed)

    return now.toISOString()
}