import { cookies } from "next/headers"
import { Partial } from "./definitions"

export const addPartial = (partial: Partial) => {
    const cookieStore = cookies()
    const stored = cookieStore.get('partials')

    if (stored) {
        const partials: Partial[] = JSON.parse(stored.value)
        partials.push(partial)
        cookieStore.set('partials', JSON.stringify(partials), { expires: Date.now() + 43200000 })
    } else {
        const partials: Partial[] = new Array()
        partials.push(partial)
        cookieStore.set('partials', JSON.stringify(partials), { expires: Date.now() + 43200000 })
    }
}

export const getPartials = (): Partial[] | undefined => {
    const cookieStore = cookies()
    const stored = cookieStore.get('partials')

    if (stored) {
        return JSON.parse(stored.value)
    }
}