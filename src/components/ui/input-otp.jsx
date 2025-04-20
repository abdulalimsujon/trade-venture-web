"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"
import { cn } from "@/lib/utils/cn"


const InputOTP = React.forwardRef(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
)
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center w-full justify-between", className)} {...props} />
  )
)
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef(
  ({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext)
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-14 w-16 items-center bg-border justify-center  border-input text-sm transition-all rounded-sm",
          isActive && "z-10 bg-white border-border border-[1px]",
          className
        )}
        {...props}
      >
        {char}
        {hasFakeCaret && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
          </div>
        )}
      </div>
    )
  }
)
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef(
  ({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  )
)
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
