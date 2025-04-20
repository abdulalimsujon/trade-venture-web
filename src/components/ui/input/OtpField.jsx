import React from 'react'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

  

const OtpField = () => {
  return (
    <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
    <InputOTPGroup className="gap-10">
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTPGroup>
  </InputOTP>

  )
}

export default OtpField