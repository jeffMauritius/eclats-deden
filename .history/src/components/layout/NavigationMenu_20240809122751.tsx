import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navigationData } from "./navigationData"
import { isMobileDevice } from "@/lib/isMobileDevice"

const NavigationMenuComponent = () => {
  const isMobile = isMobileDevice()
  return (
    <NavigationMenu>
      {!isMobile &&
        navigationData.map((item, index) => (
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
