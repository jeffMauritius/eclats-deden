import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navigationData } from "./navigationData"

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu>
      {navigationData.map((item, index) => (
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
          key={index}
          href={item.link}
        >
          {item.title}
        </NavigationMenuLink>
      ))}
    </NavigationMenu>
  )
}

export default NavigationMenuComponent
