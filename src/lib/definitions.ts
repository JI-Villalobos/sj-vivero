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