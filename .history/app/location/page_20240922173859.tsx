import NavigationMenuMobileComponent from "@/components/layout/NavigationMenuMobile"

const locationComponent = () => {
  return (
    <div className="min-h-[600px] md:p-10">
      <NavigationMenuMobileComponent />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2079.9093835860067!2d57.5764428127119!3d-20.006902239417872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217dab006668360b%3A0x8acfc0282b52a319!2zw4ljbGF0cyBk4oCZRWRlbg!5e0!3m2!1sfr!2smu!4v1727012203113!5m2!1sfr!2smu"
        allowFullScreen={true}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="min-h-[600px] w-full rounded-2xl border md:min-h-full"
      ></iframe>
    </div>
  )
}

export default locationComponent
