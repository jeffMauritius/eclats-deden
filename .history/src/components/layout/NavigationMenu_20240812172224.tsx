"use client"

import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navigationData, navigationDataMobile } from "./navigationData"
import isMobileDevice from "@/lib/isMobileDevice"

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu>
      {!isMobileDevice
        ? navigationData.map((item, index) => (
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              key={index}
              href={item.link}
            >
              {item.title}
            </NavigationMenuLink>
          ))
        : navigationDataMobile.map((item, index) => (
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