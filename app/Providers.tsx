"use client"

import { PropsWithChildren } from "react"
import { Toaster } from "react-hot-toast"

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}
