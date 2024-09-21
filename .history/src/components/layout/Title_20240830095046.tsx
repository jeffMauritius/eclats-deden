import Head from "next/head"
interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-auto justify-center ">
        <h1
          className={`pt-2 font-display text-4xl font-bold text-cyan-400 md:text-6xl`}
        >
          {" "}
          {`~ ${title} ~`}
        </h1>
      </div>
    </>
  )
}
