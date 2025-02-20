import NavBar from "@/components/NavBar"
import Head from "next/head"

export default function Projetos({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html>
        <Head>
          <title>Projetos</title>
        </Head>
  
        <body>
        <NavBar/>
          {children}</body>
      </html>
    )
  }