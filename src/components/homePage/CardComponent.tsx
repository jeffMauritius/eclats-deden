import { Card } from "@/components/ui/card"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HomePageValues {
  buttonTitle: string
  imageUrl: string
  pageUrl: string
}

import { ReactElement } from "react"

const CardComponent = (
  config: HomePageValues,
): ReactElement<{ buttonTitle: string; imageUrl: string; pageUrl: string }> => {
  return (
    <Link
      href={`/${config.pageUrl}`}
      className={`${config.imageUrl} relative rounded-2xl border-none transition delay-150 duration-700  ease-in-out hover:-translate-y-1  hover:scale-105`}
    >
      <Card className="border-none">
        <Button className="absolute bottom-0 right-0 rounded-tl-full border-none bg-gray-950 pl-10 text-gray-500">
          {config.buttonTitle}
          <ArrowRightIcon className="ml-2 size-4" />
        </Button>
      </Card>
    </Link>
  )
}

export default CardComponent
