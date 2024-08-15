'use client'

import clsx from "clsx"

interface Props {
    bgBlank?: boolean
}

export const Spinner = ({ bgBlank }: Props) => {
    return (
        <div 
            className={clsx(
                'animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-mp-gray-soft rounded-full dark:text-white',
                {
                    'text-mp-green': bgBlank === true
                }
            )} 
            role="status" 
            aria-label="loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    )
}