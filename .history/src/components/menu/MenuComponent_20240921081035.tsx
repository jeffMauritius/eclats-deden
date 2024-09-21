import MenuItems from "./MenuItems"
import {
  menuCrepesSalees,
  menuCrepesSucrees,
  menuGalettes,
  menuSnack,
  boissons,
} from "./data"

interface MenuComponentProps {
  menuTitle: string
  type: string
}

const MenuComponent = ({ menuTitle, type }: MenuComponentProps) => {
  return (
    <div className="p-5">
      <h1 className="pb-2 text-center font-bold">{menuTitle}</h1>
      <h3 className="text-center">Garnitures supplémentaires (+50rs)</h3>

      {type === "crepes-sucrees" &&
        menuCrepesSucrees.map(item => (
          <MenuItems
            key={item.id}
            menuTitle={item.menuTitle}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      {type === "crepes-salees" &&
        menuCrepesSalees.map(item => (
          <MenuItems
            key={item.id}
            menuTitle={item.menuTitle}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      {type === "galettes" &&
        menuGalettes.map(item => (
          <MenuItems
            key={item.id}
            menuTitle={item.menuTitle}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      {type === "boissons" &&
        boissons.map(item => (
          <MenuItems
            key={item.id}
            menuTitle={item.menuTitle}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
    </div>
  )
}

export default MenuComponent
