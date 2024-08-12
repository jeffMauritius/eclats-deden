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
    <div className="grid border-spacing-2 gap-4 border-gray-50 p-5 md:grid-cols-4">
      <div className="content-center">
        <Image
          src={imageUrl}
          alt="menu item"
          width={200}
          height={200}
          className="rounded-2xl"
        />
      </div>
      <div className="md:col-span-2">
        <h1 className="pb-2 font-bold text-gray-300">{menuTitle}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="text-right text-lg font-semibold text-cyan-400">
        {price} RS
      </div>
    </div>
  )
}

export default MenuItems
