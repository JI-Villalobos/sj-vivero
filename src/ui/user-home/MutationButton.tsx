'use client'

import { ButtonHTMLAttributes } from "react"

type ButtonProps = { title: string } 
type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps

export const MutationButton = ({ title, ...buttonProps }: Props) => {
    return (
        <button {...buttonProps}>{title}</button>
    )
}