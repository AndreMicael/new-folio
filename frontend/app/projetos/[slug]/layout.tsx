
import NavBar from "@/components/NavBar";
import Head from "next/head";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Projetos = ({ children }: Props) => {
  return (
    <html>
      <Head>
        <title>Projetos</title>
      </Head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

export default Projetos