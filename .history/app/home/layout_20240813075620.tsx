import { Footer } from "@/components/layout/Footer"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      <div className="mt-5 md:col-span-3">
        <Footer />
      </div>
    </div>
  )
}
