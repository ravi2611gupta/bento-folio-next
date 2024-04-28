import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React from 'react'

const buttonVariants = cva(
    "flex gap-2 items-center justify-center rounded-lg disabled:pointer-events-none disabled:opacity-50 px-6 py-4 text-medium font-custom-bold leading-[1.2em]",
    {
      variants: {
        variant: {
          default: "bg-primary text-white",
          dark:
            "bg-black dark:bg-dark-theme-black text-white hover:bg-primary",
          outline:
            "bg-transparent text-black border-2 border-border",
          link: "text-primary underline-offset-4 hover:underline",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )

const Button = ({children, variant, className}) => {
  return (
    <a href="#"  className={cn(buttonVariants({ variant, className }))}>
    {children}
  </a>
  )
}

export default Button