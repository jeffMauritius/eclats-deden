"use client"

import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navigationDataMobile } from "./navigationData"
import { useClientMediaQuery } from "@/lib/isMobileDevice"

const NavigationMenuMobileComponent = () => {
  const isMobile = useClientMediaQuery("(max-width: 600px)")
  return (
    <NavigationMenu>
      {!isMobile &&
        navigationDataMobile.map((item, index) => (
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

export default NavigationMenuMobileComponent
