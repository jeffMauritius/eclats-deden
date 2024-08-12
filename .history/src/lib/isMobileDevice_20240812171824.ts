"use server"

import { headers } from "next/headers";

const isMobile = (userAgent: string): boolean => {
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
}; 

export default async function Home() {
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);
 console.log("mobileCheck",mobileCheck)
  return mobileCheck
}