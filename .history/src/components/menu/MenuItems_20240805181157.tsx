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
      <div className="content-center rounded-2xl">
        <Image src={imageUrl} alt="menu item" width={200} height={200} />
      </div>
      <div className="col-span-2">
        <h1 className="pb-2">{menuTitle}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
      <div>{price} RS</div>
    </div>
  )
}

export default MenuItems
