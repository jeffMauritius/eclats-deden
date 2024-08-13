"use client"

import HomeComponent from "../menu/homeComponent"
import { ThemeToggle } from "../ThemeToggle"
import NavigationMenuComponent from "./NavigationMenu"
import { useClientMediaQuery } from "@/lib/isMobileDevice"

export function Header() {
  const isMobile = useClientMediaQuery("(max-width: 600px)")
  return (
    <header className=" z-30 w-full pb-10">
      <div className=" container flex h-20 flex-col  items-center space-x-4 pt-3 sm:justify-between sm:space-x-0">
        <div className="flex flex-auto justify-center py-3">
          {isMobile ? <HomeComponent /> : <NavigationMenuComponent />}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}