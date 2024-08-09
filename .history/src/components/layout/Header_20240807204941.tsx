import { ThemeToggle } from "../ThemeToggle"
import NavigationMenuComponent from "./NavigationMenu"

export function Header() {
  return (
    <header className=" z-30 w-full pb-10">
      <div className=" container flex h-20 flex-col  items-center space-x-4 pt-3 sm:justify-between sm:space-x-0">
        <div className="flex flex-auto justify-center py-3">
          <NavigationMenuComponent />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
