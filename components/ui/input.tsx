import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input type={type} className={cn("flex h-9 w-full rounded-md border bg-white px-3 py-1 text-sm text-black shadow-sm", className)} ref={ref} {...props} />
))
Input.displayName = "Input"

export { Input }
