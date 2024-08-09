interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div className="flex flex-auto justify-center ">
      <h1 className={`pt-2 font-display text-6xl font-bold text-cyan-400`}>
        {" "}
        {`~ ${title} ~`}
      </h1>
    </div>
  )
}
