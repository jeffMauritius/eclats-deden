"use client"

import { ThemeToggle } from "../ThemeToggle"
import NavigationMenuComponent from "./NavigationMenu"

export function Header() {
  return (
    <header className=" z-30 w-full">
      <div className=" container flex  flex-col  items-center space-x-4 pt-3 sm:justify-between sm:space-x-0">
        <div className="flex flex-auto justify-center py-3">
          <NavigationMenuComponent />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
