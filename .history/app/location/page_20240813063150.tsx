const locationComponent = () => {
  return (
    <div className="flex">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.607834382711!2d57.57570307522923!3d-20.007392881398577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217dab454717f829%3A0x81fe4cfd633743fc!2sCamille%20snack!5e1!3m2!1sfr!2smu!4v1723515596953!5m2!1sfr!2smu"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-screen w-full rounded-2xl border p-10"
      ></iframe>
    </div>
  )
}

export default locationComponent
