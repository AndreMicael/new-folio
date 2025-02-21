
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Projetos = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  )
}

export default Projetos