import Link from "next/link"
import { Button } from "../ui/button"

const HomeComponent = () => {
  return (
    <div>
      <Link href={"/"}>
        <Button>Retour acceuil</Button>
      </Link>
    </div>
  )
}
