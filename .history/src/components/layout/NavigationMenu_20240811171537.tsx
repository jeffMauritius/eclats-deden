"use client"

import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navigationData } from "./navigationData"
import { useClientMediaQuery } from "@/lib/isMobileDevice"

const NavigationMenuComponent = () => {
  const isMobile = useClientMediaQuery("(max-width: 600px)")
  return (
    <NavigationMenu>
      {!isMobile ? (
        navigationData.map((item, index) => (
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            key={index}
            href={item.link}
          >
            {item.title}
          </NavigationMenuLink>
        ))
      ) : (
        <div>mobile menu</div>
      )}
    </NavigationMenu>
  )
}

export default NavigationMenuComponent
