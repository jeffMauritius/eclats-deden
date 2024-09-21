interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div className="flex flex-auto justify-center ">
      <h1
        className={`pt-2 font-playwrite text-4xl font-bold text-cyan-400 md:text-6xl`}
      >
        {" "}
        {`~ ${title} ~`}
      </h1>
    </div>
  )
}
