import Image from "next/image"

interface MenuItemsProps {
  menuTitle: string
  price: number
  description: string
  imageUrl: string
}

const MenuItems = ({
  menuTitle,
  price,
  description,
  imageUrl,
}: MenuItemsProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-5">
      <div className="content-center">
        <Image
          src={imageUrl}
          alt="menu item"
          width={200}
          height={200}
          className="rounded-2xl"
        />
      </div>
      <div className="col-span-2">
        <h1 className="pb-2">{menuTitle}</h1>
        <p className="text-cyan-400">{description}</p>
      </div>
      <div className="font-bold text-cyan-400">{price} RS</div>
    </div>
  )
}

export default MenuItems
